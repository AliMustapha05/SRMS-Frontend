
import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  Wrench,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

import { loginPageData } from "../../data/loginPageData";
import "../../styles/LoginPage/LoginForm.css";

const iconMap = {
  shield: ShieldCheck,
  wrench: Wrench,
};

function LoginForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const { shop, branding, features, form: formContent } = loginPageData;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email.trim() || !form.password) {
      setError("Please enter your email and password.");
      return;
    }

    alert("Login UI ready. Authentication will be connected later.");
  };

  return (
    <main className="fixtech-auth">

      {/* LEFT BRANDING PANEL */}
      <section className="fixtech-auth-brand">

        <Link to="/" className="fixtech-auth-logo">
          <span className="fixtech-auth-logo-icon">
            <Wrench size={25} />
          </span>
          <span>{shop.name}</span>
        </Link>

        <div className="fixtech-auth-brand-content">

          <div className="fixtech-auth-brand-badge">
            <ShieldCheck size={16} />
            {branding.badge}
          </div>

          <h1>
            {branding.title}
            <br />
            <span>{branding.highlightedTitle}</span>
          </h1>

          <p>{branding.description}</p>

          <div className="fixtech-auth-features">
            {features.map((feature) => {
              const FeatureIcon = iconMap[feature.icon] || ShieldCheck;

              return (
                <div key={feature.id}>
                  <span className="fixtech-auth-feature-icon">
                    <FeatureIcon size={18} />
                  </span>
                  {feature.title}
                </div>
              );
            })}
          </div>
        </div>

        <div className="fixtech-auth-brand-footer">
          © {new Date().getFullYear()} {shop.name}.
          All rights reserved.
        </div>
      </section>

      {/* RIGHT LOGIN PANEL */}
      <section className="fixtech-auth-form-panel">
        <div className="fixtech-auth-form-wrapper">

          <Link to="/" className="fixtech-auth-back">
            <ArrowLeft size={17} />
            {formContent.backText}
          </Link>

          <div className="fixtech-auth-heading">
            <span className="fixtech-auth-eyebrow">
              {formContent.eyebrow}
            </span>

            <h2>{formContent.title}</h2>
            <p>{formContent.description}</p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="fixtech-auth-form"
          >
            {error && (
              <div className="fixtech-auth-error" role="alert">
                {error}
              </div>
            )}

            <div className="fixtech-auth-field">
              <label htmlFor="employee-email">
                {formContent.emailLabel}
              </label>

              <div className="fixtech-auth-input-wrap">
                <Mail size={19} />

                <input
                  id="employee-email"
                  type="email"
                  name="email"
                  placeholder={formContent.emailPlaceholder}
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="username"
                  required
                />
              </div>
            </div>

            <div className="fixtech-auth-field">
              <label htmlFor="employee-password">
                {formContent.passwordLabel}
              </label>

              <div className="fixtech-auth-input-wrap">
                <LockKeyhole size={19} />

                <input
                  id="employee-password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder={formContent.passwordPlaceholder}
                  value={form.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  required
                />

                <button
                  type="button"
                  className="fixtech-auth-eye"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={
                    showPassword ? "Hide password" : "Show password"
                  }
                >
                  {showPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="fixtech-auth-submit"
            >
              {formContent.submitText}
              <ArrowRight size={19} />
            </button>
          </form>

          <div className="fixtech-auth-help">
            <ShieldCheck size={17} />
            <p>{formContent.helpText}</p>
          </div>

        </div>
      </section>
    </main>
  );
}

export default LoginForm;
