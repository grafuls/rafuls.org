import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for rafuls.org — how personal data submitted through the contact form is handled.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container max-w-3xl py-12 md:py-24">
      <Link
        href="/"
        className="mb-8 inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to home
      </Link>

      <article className="prose dark:prose-invert">
        <h1>Hermes Agent — Privacy Policy</h1>
        <p>
          <strong>Effective date:</strong> 29 May 2026
          <br />
          <strong>Controller:</strong> Czerca, Spolkova 13,
          Brno, Czech Republic
          <br />
          <strong>Contact:</strong> <a href="mailto:privacy@rafuls.org">privacy@rafuls.org</a>
        </p>

        <hr />

        <h2>1. Introduction</h2>
        <p>
          This Privacy Policy describes how [Your Company Name]
          (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) collects,
          processes, and protects personal data when you engage our Hermes Agent
          consultancy services. We are committed to complying with the General
          Data Protection Regulation (EU) 2016/679 (&ldquo;GDPR&rdquo;) and
          applicable Czech law.
        </p>
        <p>
          Our services are provided exclusively to business clients
          (&ldquo;Clients&rdquo;). Where our agents access end-user data on
          behalf of a Client, the Client acts as data controller and we act as
          data processor pursuant to a separate Data Processing Agreement
          (&ldquo;DPA&rdquo;).
        </p>

        <hr />

        <h2>2. Data We Access</h2>
        <p>
          When a Client authorises a Hermes Agent to connect to a Google account,
          the agent may access the following data in read-only mode:
        </p>

        <h3>2.1 Gmail</h3>
        <ul>
          <li>Email message content, headers, metadata, and attachments</li>
          <li>Folder and label structure</li>
          <li>Sender and recipient information</li>
        </ul>

        <h3>2.2 Google Drive</h3>
        <ul>
          <li>
            File names, metadata, and content of documents, spreadsheets, and
            other files
          </li>
          <li>Folder hierarchy and sharing permissions (metadata only)</li>
        </ul>

        <h3>2.3 Google Calendar</h3>
        <ul>
          <li>
            Event titles, descriptions, dates, times, attendees, and locations
          </li>
          <li>Calendar list and settings</li>
        </ul>

        <h3>2.4 Google Contacts</h3>
        <ul>
          <li>
            Contact names, email addresses, phone numbers, and associated
            metadata
          </li>
        </ul>

        <p>
          All access is strictly read-only. We do not create, modify, or delete
          any data in connected Google accounts.
        </p>

        <hr />

        <h2>3. Legal Basis for Processing</h2>
        <p>
          We process personal data under the following GDPR legal bases:
        </p>
        <ul>
          <li>
            <strong>Article 6(1)(b)</strong> — Processing necessary for
            performance of a contract with the Client
          </li>
          <li>
            <strong>Article 6(1)(c)</strong> — Compliance with legal obligations
          </li>
          <li>
            <strong>Article 6(1)(f)</strong> — Legitimate interests in operating,
            securing, and improving our services, where not overridden by data
            subject rights
          </li>
        </ul>
        <p>
          Where special category data is incidentally encountered in accessed
          content, we do not intentionally process it and apply immediate
          minimisation measures.
        </p>

        <hr />

        <h2>4. How We Use the Data</h2>
        <p>
          Data accessed through connected Google accounts is used exclusively to:
        </p>
        <ul>
          <li>
            Provide the specific AI agent service contracted by the Client
          </li>
          <li>
            Generate outputs, summaries, or analyses as specified in the service
            agreement
          </li>
          <li>Diagnose technical issues and ensure service reliability</li>
        </ul>
        <p>
          We do not use accessed data to train AI models, conduct marketing, or
          share with third parties beyond those listed in Section 5.
        </p>

        <hr />

        <h2>5. Data Sharing and Sub-processors</h2>
        <p>
          We may share data with the following categories of sub-processors, each
          subject to GDPR-compliant data processing agreements:
        </p>
        <ul>
          <li>
            <strong>Cloud infrastructure providers</strong> (e.g. Hetzner Cloud)
            — for hosting agent workloads within the EU/EEA
          </li>
          <li>
            <strong>AI model providers</strong> (e.g. Anthropic) — solely for
            inference; subject to their data processing terms
          </li>
          <li>
            <strong>Monitoring and logging services</strong> — for security and
            operational purposes, with data minimisation applied
          </li>
        </ul>
        <p>
          We do not transfer personal data outside the EU/EEA unless appropriate
          safeguards are in place (e.g. Standard Contractual Clauses).
        </p>

        <hr />

        <h2>6. Data Retention</h2>
        <p>
          We retain data accessed through Google integrations only for as long as
          necessary to deliver the contracted service:
        </p>
        <ul>
          <li>
            <strong>Transient processing data</strong> (in-memory) — deleted
            immediately after task completion
          </li>
          <li>
            <strong>Logs containing incidental personal data</strong> — retained
            for a maximum of 30 days
          </li>
          <li>
            <strong>OAuth tokens</strong> — retained until the Client revokes
            access or the engagement ends
          </li>
        </ul>
        <p>
          Clients may request deletion of any retained data at any time by
          contacting us at the address in Section 1.
        </p>

        <hr />

        <h2>7. Security</h2>
        <p>
          We implement appropriate technical and organisational measures to
          protect personal data, including:
        </p>
        <ul>
          <li>Encryption of OAuth tokens at rest using AES-256</li>
          <li>TLS 1.2+ for all data in transit</li>
          <li>
            Access controls and least-privilege principles for agent permissions
          </li>
          <li>Regular security assessments of infrastructure</li>
        </ul>

        <hr />

        <h2>8. Data Subject Rights</h2>
        <p>
          Where personal data of identifiable individuals is processed, those
          individuals have rights under GDPR including access, rectification,
          erasure, restriction, portability, and objection. Requests should be
          directed to the Client (as data controller) in the first instance, or
          to us at the contact address in Section 1.
        </p>

        <hr />

        <h2>9. Google API Services</h2>
        <p>
          Our use of Google API Services and any data obtained therefrom is
          subject to Google&rsquo;s API Services User Data Policy. We access
          Google data solely as authorised by the Client and only to the minimum
          extent necessary to provide the contracted service. We do not sell
          Google user data and do not use it for advertising purposes.
        </p>

        <hr />

        <h2>10. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Clients will be
          notified of material changes with at least 30 days&rsquo; notice before
          changes take effect.
        </p>

        <hr />

        <h2>11. Contact and Complaints</h2>
        <p>
          For privacy-related enquiries, contact: <a href="mailto:privacy@rafuls.org">privacy@rafuls.org</a>
        </p>
        <p>
          You also have the right to lodge a complaint with the Czech supervisory
          authority:
          <br />
          <strong>
            Office for Personal Data Protection (Úřad pro ochranu osobních
            údajů)
          </strong>
          <br />
          posta@uoou.gov.cz —{" "}
          <a
            href="https://www.uoou.cz"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.uoou.cz
          </a>
        </p>
      </article>
    </div>
  )
}
