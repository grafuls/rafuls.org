import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for consultancy services offered via rafuls.org.",
}

export default function TermsOfServicePage() {
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
        <h1>Hermes Agent — Terms of Service</h1>
        <p>
          <strong>Effective date:</strong> 29 May 2026
          <br />
          <strong>Service provider:</strong> Czerca, Spolkova 13,
          Brno, Czech Republic
          <br />
          <strong>Registration:</strong> [PENDING]
          <br />
          <strong>Contact:</strong> <a href="mailto:hermes@rafuls.org">hermes@rafuls.org</a>
        </p>

        <hr />

        <h2>1. Scope and Acceptance</h2>
        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) govern the provision of
          Hermes Agent AI consultancy services (&ldquo;Services&rdquo;) by [Your
          Company Name] (&ldquo;Provider&rdquo;) to the contracting business
          entity (&ldquo;Client&rdquo;). By executing a service agreement or
          statement of work referencing these Terms, the Client agrees to be
          bound by them.
        </p>
        <p>
          These Terms apply to business clients only. Services are not offered to
          consumers as defined under Czech Act No. 634/1992 Coll.
        </p>

        <hr />

        <h2>2. Description of Services</h2>
        <p>
          The Provider delivers custom AI agents (&ldquo;Hermes Agents&rdquo;)
          designed to read, analyse, and synthesise information from the
          Client&rsquo;s connected Google Workspace accounts. Each Hermes Agent
          deployment is scoped in a Statement of Work (&ldquo;SOW&rdquo;) which
          specifies:
        </p>
        <ul>
          <li>
            The Google services to be accessed (Gmail, Drive, Calendar, and/or
            Contacts)
          </li>
          <li>Permitted use cases and intended outputs</li>
          <li>Delivery timelines and acceptance criteria</li>
          <li>Fees and payment schedule</li>
        </ul>

        <hr />

        <h2>3. Google Account Access</h2>

        <h3>3.1 Authorisation</h3>
        <p>
          The Client must grant the Provider OAuth authorisation to the specified
          Google account(s). Access is read-only; the Provider will not modify,
          delete, or create any data in connected accounts.
        </p>

        <h3>3.2 Scope limitation</h3>
        <p>
          The Provider will request only the minimum OAuth scopes necessary for
          the agreed service. The Client may revoke access at any time via Google
          account settings, which will immediately terminate the agent&rsquo;s
          ability to access that account.
        </p>

        <h3>3.3 Client responsibility</h3>
        <p>
          The Client is responsible for ensuring it has the legal authority to
          grant access to all data within the connected accounts, including any
          personal data of employees or third parties. The Client indemnifies the
          Provider against any claims arising from unauthorised or unlawful data
          access attributable to the Client&rsquo;s account setup.
        </p>

        <hr />

        <h2>4. Client Obligations</h2>
        <p>The Client agrees to:</p>
        <ul>
          <li>
            Provide accurate and complete information necessary for the Provider
            to deliver the Services
          </li>
          <li>
            Ensure its use of the Services complies with applicable law,
            including GDPR where personal data is involved
          </li>
          <li>
            Not use the Services for any unlawful purpose, including
            unauthorised surveillance of individuals
          </li>
          <li>
            Maintain confidentiality of any credentials, API keys, or access
            tokens provided by the Provider
          </li>
          <li>
            Promptly notify the Provider of any security incident or suspected
            unauthorised access
          </li>
        </ul>

        <hr />

        <h2>5. Fees and Payment</h2>
        <p>
          Fees are as set out in the applicable SOW. Unless otherwise agreed:
        </p>
        <ul>
          <li>Invoices are due within 14 days of the invoice date</li>
          <li>
            Late payments accrue interest at the statutory rate under Czech Act
            No. 89/2012 Coll.
          </li>
          <li>
            The Provider may suspend Services after 30 days of non-payment with
            written notice
          </li>
        </ul>
        <p>
          All fees are exclusive of VAT, which will be added where applicable
          under Czech and EU law.
        </p>

        <hr />

        <h2>6. Intellectual Property</h2>

        <h3>6.1 Provider IP</h3>
        <p>
          All proprietary technology, methodologies, agent frameworks, and
          tooling developed by the Provider remain the exclusive property of the
          Provider. These Terms do not grant the Client any licence to the
          Provider&rsquo;s underlying technology.
        </p>

        <h3>6.2 Client data and outputs</h3>
        <p>
          The Client retains ownership of all data accessed from its Google
          accounts. Deliverables produced by Hermes Agents for the Client
          (reports, summaries, analyses) are assigned to the Client upon full
          payment of applicable fees.
        </p>

        <hr />

        <h2>7. Confidentiality</h2>
        <p>
          Each party agrees to keep confidential all non-public information
          received from the other party in connection with the Services
          (&ldquo;Confidential Information&rdquo;). This obligation survives
          termination for three (3) years. Confidential Information does not
          include information that is publicly known, independently developed, or
          required to be disclosed by law.
        </p>

        <hr />

        <h2>8. Data Processing</h2>
        <p>
          Where the Provider processes personal data on behalf of the Client, the
          parties shall execute a separate Data Processing Agreement
          (&ldquo;DPA&rdquo;) in accordance with Article 28 GDPR. The DPA forms
          part of the service agreement. The Provider&rsquo;s Privacy Policy
          governs the Provider&rsquo;s own data processing activities.
        </p>

        <hr />

        <h2>9. Limitation of Liability</h2>
        <p>To the maximum extent permitted by applicable law:</p>
        <ul>
          <li>
            The Provider&rsquo;s total aggregate liability arising out of or in
            connection with the Services shall not exceed the fees paid by the
            Client in the three (3) months preceding the claim
          </li>
          <li>
            The Provider shall not be liable for indirect, consequential,
            incidental, or special damages, including loss of profits or data
          </li>
        </ul>
        <p>
          Nothing in these Terms excludes liability for fraud, wilful misconduct,
          or death and personal injury caused by negligence.
        </p>

        <hr />

        <h2>10. Warranties and Disclaimers</h2>
        <p>
          The Provider warrants that it will perform the Services with reasonable
          skill and care. The Provider does not warrant that AI agent outputs are
          error-free, complete, or suitable for any specific purpose. The Client
          is responsible for verifying and validating all agent outputs before
          acting on them.
        </p>

        <hr />

        <h2>11. Term and Termination</h2>
        <p>
          The service term is set out in the applicable SOW. Either party may
          terminate for material breach if the breach is not remedied within 14
          days of written notice. The Provider may terminate immediately if the
          Client violates Section 4 or becomes insolvent.
        </p>
        <p>
          Upon termination: the Provider will revoke all OAuth tokens, delete
          retained Client data within 30 days, and deliver a final invoice for
          work completed to the termination date.
        </p>

        <hr />

        <h2>12. Governing Law and Disputes</h2>
        <p>
          These Terms are governed by the laws of the Czech Republic, excluding
          conflict of law rules. Disputes shall first be attempted to be resolved
          by good-faith negotiation. If unresolved within 30 days, disputes shall
          be submitted to the exclusive jurisdiction of the courts of the Czech
          Republic.
        </p>

        <hr />

        <h2>13. Miscellaneous</h2>
        <ul>
          <li>
            These Terms, together with the applicable SOW and DPA, constitute the
            entire agreement between the parties
          </li>
          <li>No waiver of any term shall be effective unless in writing</li>
          <li>
            If any provision is found unenforceable, the remainder continues in
            full force
          </li>
          <li>
            The Provider may update these Terms with 30 days&rsquo; written
            notice; continued use constitutes acceptance
          </li>
          <li>
            The Client may not assign its rights under these Terms without the
            Provider&rsquo;s written consent
          </li>
        </ul>
      </article>
    </div>
  )
}
