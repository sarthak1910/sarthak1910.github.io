import { useId, useRef, useState } from 'react';
import { contactForm, profile } from '../data/profile';
import { Icon } from './Icon';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

/**
 * Accepts a plain 10-digit number, and tolerates the way people actually type one:
 * spaces, dashes, brackets, a +91 country code or a leading 0.
 * Returns the bare 10 digits, or null if it cannot be read as one.
 */
function normalisePhone(value) {
  let digits = value.replace(/\D/g, '');

  if (digits.length === 12 && digits.startsWith('91')) digits = digits.slice(2);
  else if (digits.length === 11 && digits.startsWith('0')) digits = digits.slice(1);

  return digits.length === 10 ? digits : null;
}

const FIELDS = [
  {
    name: 'name',
    label: 'Your name',
    type: 'text',
    required: true,
    autoComplete: 'name',
    placeholder: 'Full name',
    maxLength: 80,
    validate: (value) => {
      if (!value.trim()) return 'Please enter your name.';
      if (value.trim().length < 2) return 'Please enter your full name.';
      return '';
    },
  },
  {
    name: 'email',
    label: 'Work email',
    type: 'email',
    required: true,
    autoComplete: 'email',
    placeholder: 'you@company.com',
    maxLength: 254,
    validate: (value) => {
      if (!value.trim()) return 'Please enter your email address.';
      if (!EMAIL_PATTERN.test(value.trim())) return 'Enter a valid email, like you@company.com.';
      return '';
    },
  },
  {
    name: 'company',
    label: 'Company',
    type: 'text',
    required: false,
    autoComplete: 'organization',
    placeholder: 'Optional',
    maxLength: 100,
    validate: () => '',
  },
  {
    name: 'phone',
    label: 'Phone',
    type: 'tel',
    required: false,
    autoComplete: 'tel',
    inputMode: 'numeric',
    placeholder: '10-digit number',
    maxLength: 18,
    validate: (value) => {
      if (!value.trim()) return '';
      return normalisePhone(value) ? '' : 'Enter a 10-digit phone number.';
    },
  },
  {
    name: 'message',
    label: 'Message',
    type: 'textarea',
    required: true,
    placeholder: "A role, a project, or anything you'd like to discuss.",
    maxLength: 2000,
    validate: (value) => {
      if (!value.trim()) return 'Please write a short message.';
      if (value.trim().length < 10) return 'Please add a little more detail.';
      return '';
    },
  },
];

const EMPTY = Object.fromEntries(FIELDS.map((field) => [field.name, '']));

export function ContactForm() {
  const id = useId();
  const formRef = useRef(null);
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle');
  const [sendError, setSendError] = useState('');

  function validateAll(source = values) {
    const next = {};
    for (const field of FIELDS) {
      const message = field.validate(source[field.name]);
      if (message) next[field.name] = message;
    }
    return next;
  }

  function handleChange(field, value) {
    setValues((prev) => ({ ...prev, [field.name]: value }));

    // Once a field has been flagged, re-check as they type so the error clears itself.
    if (errors[field.name]) {
      setErrors((prev) => ({ ...prev, [field.name]: field.validate(value) }));
    }
  }

  // Validates the value straight off the element: reading `values` here would use
  // the last committed render, which is stale if a change and blur land in one tick.
  function handleBlur(field, value) {
    setTouched((prev) => ({ ...prev, [field.name]: true }));
    setErrors((prev) => ({ ...prev, [field.name]: field.validate(value) }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (status === 'sending') return;

    const nextErrors = validateAll();
    setErrors(nextErrors);
    setTouched(Object.fromEntries(FIELDS.map((field) => [field.name, true])));

    const firstInvalid = FIELDS.find((field) => nextErrors[field.name]);
    if (firstInvalid) {
      setStatus('idle');
      formRef.current?.querySelector(`[name="${firstInvalid.name}"]`)?.focus();
      return;
    }

    setStatus('sending');
    setSendError('');

    const phone = values.phone.trim() ? normalisePhone(values.phone) : '';

    try {
      const response = await fetch(contactForm.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: contactForm.accessKey,
          subject: `Portfolio enquiry from ${values.name.trim()}`,
          from_name: 'Portfolio contact form',
          name: values.name.trim(),
          email: values.email.trim(),
          company: values.company.trim(),
          phone,
          message: values.message.trim(),
          botcheck: '',
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || result.success === false) {
        throw new Error(result.message || 'Message could not be sent.');
      }

      setValues(EMPTY);
      setErrors({});
      setTouched({});
      setStatus('success');
    } catch (error) {
      setStatus('error');
      setSendError(
        error instanceof Error && error.message ? error.message : 'Message could not be sent.',
      );
    }
  }

  const invalidCount = Object.values(errors).filter(Boolean).length;

  return (
    <form className="contact-form" ref={formRef} onSubmit={handleSubmit} noValidate>
      <h3 className="contact-form-title">Send me a message</h3>
      <p className="contact-form-hint">
        Leave your email or phone and I'll get back to you.
      </p>

      {/* Honeypot: real people never see it, bots fill it in and get dropped. */}
      <input
        type="checkbox"
        name="botcheck"
        className="sr-only"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="contact-form-grid">
        {FIELDS.map((field) => {
          const fieldId = `${id}-${field.name}`;
          const errorId = `${fieldId}-error`;
          const error = touched[field.name] ? errors[field.name] : '';
          const Tag = field.type === 'textarea' ? 'textarea' : 'input';

          return (
            <p key={field.name} className={`field field-${field.name}`}>
              <label htmlFor={fieldId}>
                {field.label}
                {field.required && (
                  <span aria-hidden="true" className="field-required">
                    *
                  </span>
                )}
              </label>

              <Tag
                id={fieldId}
                name={field.name}
                type={field.type === 'textarea' ? undefined : field.type}
                rows={field.type === 'textarea' ? 4 : undefined}
                value={values[field.name]}
                onChange={(event) => handleChange(field, event.target.value)}
                onBlur={(event) => handleBlur(field, event.target.value)}
                autoComplete={field.autoComplete}
                inputMode={field.inputMode}
                placeholder={field.placeholder}
                maxLength={field.maxLength}
                disabled={status === 'sending'}
                aria-invalid={error ? 'true' : undefined}
                aria-describedby={error ? errorId : undefined}
                aria-required={field.required || undefined}
              />

              {error && (
                <span className="field-error" id={errorId}>
                  {error}
                </span>
              )}
            </p>
          );
        })}
      </div>

      <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
        {status === 'sending' ? (
          'Sending…'
        ) : (
          <>
            Send message
            <Icon name="arrowRight" size={16} />
          </>
        )}
      </button>

      <p className="form-status" role="status" aria-live="polite">
        {invalidCount > 0 && status !== 'success' && (
          <span className="is-error">
            {invalidCount === 1
              ? 'Please fix the highlighted field.'
              : `Please fix the ${invalidCount} highlighted fields.`}
          </span>
        )}
        {status === 'success' && (
          <span className="is-success">
            <Icon name="check" size={15} />
            Thanks — your message is on its way. I'll reply to the email you left.
          </span>
        )}
        {status === 'error' && invalidCount === 0 && (
          <span className="is-error">
            {sendError} You can email me directly at{' '}
            <a href={`mailto:${profile.email}`}>{profile.email}</a>.
          </span>
        )}
      </p>
    </form>
  );
}
