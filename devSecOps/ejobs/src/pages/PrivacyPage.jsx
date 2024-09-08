import React from "react";
import Background from "../assets/Images/recruit.jpg";
import Header from "../component/Header";
import FooterComponent from "../component/Footer";

function Privacy() {
  return (
    <div>
      <div
        className="h-72 relative after:absolute after:bg-black after:z-10 after:top-0 after:left-0 after:w-full after:h-full after:opacity-55"
        style={{
          background: `url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Header lightMode={true} />
        <h2 className="z-20 text-4xl absolute top-1/2 left-1/2 text-white font-semibold">
          Privacy Policy
        </h2>
      </div>
      <div className="w-3/4 mx-auto mb-20">
        <p className="mt-10">
          As part of our operations, JOBLINK.NG Nigeria (“JOBLINK.NG” or “the
          Company”) collects and processes certain types of information (such as
          names, telephone numbers, addresses, etc.) of individuals that make
          them easily identifiable. These individuals include current, past, and
          prospective employees, merchants, suppliers/vendors, customers of
          merchants, and other individuals whom JOBLINK.NG communicates or deals
          with, jointly and/or severally (“Data Subjects”). Maintaining the Data
          Subject’s trust and confidence requires that Data Subjects do not
          suffer negative consequences/effects as a result of providing
          JOBLINK.NG with their Personal Data. To this end, JOBLINK.NG is firmly
          committed to complying with applicable data protection laws,
          regulations, rules, and principles to ensure the security of Personal
          Data handled by the Company. This Data Privacy & Protection Policy
          (“Policy”) describes the minimum standards that must be strictly
          adhered to regarding the collection, use, and disclosure of Personal
          Data and indicates that JOBLINK.NG is dedicated to processing the
          Personal Data it receives or processes with absolute confidentiality
          and security. This Policy applies to all forms of systems, operations,
          and processes within the JOBLINK.NG environment that involve the
          collection, storage, use, transmission, and disposal of Personal Data.
          Failure to comply with the data protection rules and guiding
          principles set out in the Nigeria Data Protection Regulation, 2019
          (NDPR) as well as those set out in this Policy is a material violation
          of JOBLINK.NG’s policies and may result in disciplinary action as
          required, including suspension or termination of employment or
          business relationship.
        </p>
        <h3 className="text-lg font-semibold mt-6">Scope</h3>
        <p className="">
          This Policy applies to all employees of JOBLINK.NG, as well as to any
          external business partners (such as merchants, suppliers, contractors,
          vendors, and other service providers) who receive, send, collect,
          access, or process Personal Data in any way on behalf of JOBLINK.NG,
          including processing wholly or partly by automated means. This Policy
          also applies to third party Data Processors who process Personal Data
          received from JOBLINK.NG. General Principles for Processing of
          Personal Data JOBLINK.NG is committed to maintaining the principles in
          the NDPR regarding the processing of Personal Data. To demonstrate
          this commitment as well as our aim of creating a positive privacy
          culture within JOBLINK.NG, JOBLINK.NG adheres to the following basic
          principles relating to the processing of Personal Data: Lawfulness,
          Fairness, and Transparency. Personal Data must be processed lawfully,
          fairly, and in a transparent manner at all times. This implies that
          Personal Data collected and processed by or on behalf of JOBLINK.NG
          must be in accordance with the specific, legitimate, and lawful
          purpose consented to by the Data Subject, save where the processing is
          otherwise allowed by law or within other legal grounds recognized in
          the NDPR.
        </p>
        {/* second section */}
        <div className="">
          <div>
            <h2 className="text-lg font-semibold mt-6">Our Mission</h2>
            <p className="">
              Personal Data must be accurate and kept up to date. In this
              regard, JOBLINK.NG
            </p>
            <ol>
              <li>
                shall ensure that any data it collects and/or processes is
                accurate and not misleading in a way that could be harmful to
                the Data Subject
              </li>
              <li>
                {" "}
                make efforts to keep Personal Data updated were reasonable and
                applicable
              </li>
              <li>
                make timely efforts to correct or erase Personal Data when
                inaccuracies are discovered.
              </li>
            </ol>
          </div>
          <div>
            <h2 className="text-lg font-semibold mt-6">Purpose /Limitation</h2>
            <p className="">
              JOBLINK.NG collects Personal Data only for the purposes identified
              in the appropriate JOBLINK.NG Privacy Notice provided to the Data
              Subject and for which consent has been obtained. Such Personal
              Data cannot be reused for another purpose that is incompatible
              with the original purpose, except a new Consent is obtained.
            </p>
            <h4>
              {" "}
              The purposes for which JOBLINK.NG will use your personal data
              include
            </h4>
            <ol className="pl-4" style={{listStyleType:"decimal"}}>
              <li>
                {" "}
                For the provision of services to you. For example, when you
                purchase any of our products or services, we will use your
                personal data to process your order
              </li>
              <li>
                {" "}
                For customer care and billing. When you use our products or
                services, we will use your personal information to bill you and
                to respond to inquiries and concerns that you may have about our
                products and services
              </li>
              <li>
                {" "}
                Customer service messages. We will use your personal data to
                keep you updated with the latest information or changes about
                our products and services
              </li>
              <li>
                For marketing purposes. In order to serve you better, we will
                use your personal data to market our products and services to
                you
              </li>
              <li>
                Fraud prevention and security. We will process your personal and
                traffic data in order to protect you against and detect fraud,
                to protect and detect misuse or damage to our platform
              </li>
              <li>
                Managing our platform and understanding platform usage. We do
                this to manage the volume of jobs and to understand how you use
                our platform, products, and services.
              </li>
            </ol>
          </div>
          <div>
            <h2 className="text-lg font-semibold mt-6">Data Minimization</h2>
            <ol className="pl-4" style={{listStyleType:"decimal"}}>
              <li>
                {" "}
                JOBLINK.NG limits Personal Data collection and usage to data
                that is relevant, adequate, and absolutely necessary for
                carrying out the purpose for which the data is processed
              </li>
              <li>
                {" "}
                JOBLINK.NG will evaluate whether and to what extent the
                processing of personal data is necessary and where the purpose
                allows, anonymized data must be used.
              </li>
            </ol>
          </div>
        </div>
        {/* Service ssection */}
        <h2 className="text-2xl capitalize"> Integrity and Confidentiality</h2>
        <ol className="pl-4" style={{listStyleType:"decimal"}}>
          <li>
            JOBLINK.NG shall establish adequate controls in order to protect the
            integrity and confidentiality of Personal Data, both in digital and
            physical format, and to prevent personal data from being
            accidentally or deliberately compromised
          </li>
          <li>
            Personal data of Data Subjects must be protected from unauthorized
            viewing or access and from unauthorized changes to ensure that it is
            reliable and correct
          </li>
          <li>
            {" "}
            Any personal data processing undertaken by an employee who has not
            been authorized to carry such out as part of their legitimate duties
            is unauthorized
          </li>
          <li>
            {" "}
            Employees may have access to Personal Data only as is appropriate
            for the type and scope of the task in question and are forbidden to
            use Personal Data for their own private or commercial purposes or to
            disclose them to unauthorized persons, or make them available in any
            other way
          </li>
          <li>
            {" "}
            The Human Resources Department must inform employees at the start of
            the employment relationship about the obligation to maintain
            personal data privacy. This obligation shall remain in force even
            after employment has ended
          </li>
        </ol>
        <div>
          <h2 className="text-2xl font-semibold mt-4">
            Personal Data Retention
          </h2>
          <ol className="pl-4" style={{listStyleType:"decimal"}}>
            <li>
              All personal information shall be retained, stored, and destroyed
              by JOBLINK.NG in line with legislative and regulatory guidelines.
              For all Personal Data and records obtained, used, and stored
              within the Company, JOBLINK.NG shall perform periodical reviews of
              the data retained to confirm the accuracy, purpose, validity, and
              requirement to retain
            </li>
            <li>
              {" "}
              To the extent permitted by applicable laws and without prejudice
              to JOBLINK.NG’s Document Retention Policy, the length of storage
              of Personal Data shall, amongst other things, be determined by
              <ul>
                <li>
                  {" "}
                  the contract terms agreed between JOBLINK.NG and the Data
                  Subject or as long as it is needed for the purpose for which
                  it was obtained
                </li>
                <li>
                  {" "}
                  whether the transaction or relationship has statutory
                  implication or a required retention period
                </li>
                <li>
                  {" "}
                  whether there is an express request for deletion of Personal
                  Data by the Data Subject, provided that such request will only
                  be treated where the Data Subject is not under any
                  investigation which may require JOBLINK.NG to retain such
                  Personal Data or there is no subsisting contractual
                  arrangement with the Data Subject that would require the
                  processing of the Personal Data
                </li>
                <li>
                  {" "}
                  whether JOBLINK.NG has another lawful basis for retaining that
                  information beyond the period for which it is necessary to
                  serve the original purpose
                </li>
              </ul>
            </li>
            <li>
              {" "}
              Notwithstanding the foregoing and pursuant to the NDPR, JOBLINK.NG
              shall be entitled to retain and process Personal Data for
              archiving, scientific research, historical research, or
              statistical purposes for the public interest.
            </li>
            <li>
              {" "}
              JOBLINK.NG would forthwith delete Personal Data in JOBLINK.NG’s
              possession where such Personal Data is no longer required by
              JOBLINK.NG or in line with JOBLINK.NG’s Retention Policy, provided
              no law or regulation is in force that requires JOBLINK.NG to
              retain such Personal Data.
            </li>
          </ol>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mt-4">Accountability</h2>
          <ol className="pl-4" style={{listStyleType:"decimal"}}>
            <li>
              {" "}
              JOBLINK.NG demonstrates accountability in line with the NDPR
              obligations by monitoring and continuously improving data privacy
              practices within JOBLINK.NG.
            </li>
            <li>
              Any individual or employee who breaches this policy may be subject
              to internal disciplinary action (up to and including termination
              of their employment), and may also face civil or criminal
              liability if their action violates the law.
            </li>
          </ol>
        </div>
        <div>
          <h2 className="text-xl font-semibold mt-4">Data Privacy Notice</h2>
          <ol className="pl-4" style={{listStyleType:"decimal"}}>
            <li>
              {" "}
              JOBLINK.NG considers Personal Data as confidential and as such
              must be adequately protected from unauthorized use and/or
              disclosure. JOBLINK.NG will ensure that the Data Subjects are
              provided with adequate information regarding the use of their
              Personal Data as well as acquire their respective Consent, where
              necessary
            </li>
            <li>
              JOBLINK.NG shall display a simple and conspicuous notice (Privacy
              Notice) on any medium through which Personal Data is being
              collected or processed. The following information must be
              considered for inclusion in the Privacy Notice, as appropriate in
              distinct circumstances in order to ensure fair and transparent
              processing:
            </li>
            <ol className="pl-4" style={{listStyleType:"lower-alpha"}}>
              <li>Description of collectible Personal Data</li>
              <li>
                {" "}
                Purposes for which Personal Data is collected, used, and
                disclosed
              </li>
              <li>What constitutes Data Subject’s Consent:</li>
              <li>Purpose for the collection of Personal Data</li>
              <li>
                The technical methods used to collect and store the information.
              </li>
              <li>
                Available remedies in the event of a violation of the Policy and
                the timeframe for remedy.
              </li>
              <li>
                {" "}
                Adequate information in order to initiate the process of
                exercising their privacy rights, such as access to,
                rectification, and deletion of Personal Data.
              </li>
            </ol>
            <li>
              {" "}
              JOBLINK.NG’s Privacy Notice is available on JOBLINK.NG&apos;s
              website via this joblink.ng
            </li>
          </ol>
        </div>
        <div>
          <h2 className="text-xl font-semibold mt-4">
            Legal Grounds For Processing Of Personal Data
          </h2>
          <p>
            The personal data we collect from our customers and how we collect
            it depends on the services that our customers subscribe to, how they
            use our services and how they interact or interface with us. This
            also applies to persons who are not customers of JOBLINK.NG but have
            interacted with JOBLINK.NG. We may also obtain your personal data
            from a third party with permission to share it with us.
          </p>
          <p>
            {" "}
            Please note that we only process your personal data based on the
            grounds set out in the NDPR. Accordingly, in line with the
            provisions of the NDPR, the processing of Personal Data by
            JOBLINK.NG shall be lawful if at least one of the following applies
          </p>
          <ol className="pl-4" style={{listStyleType:"decimal"}}>
            <li>
              {" "}
              where you give us consent to the processing of your Personal Data
              for one or more specific purposes. You are at liberty to withdraw
              the consent and JOBLINK.NG will cease to process your Personal
              Data where there is no other basis to do so.
            </li>
            <li>
              Where the processing is necessary for the performance of a
              contract to which the Data Subject is party or in order to take
              steps at the request of the Data Subject prior to entering into a
              contract
            </li>
            <li>
              processing is necessary for compliance with a legal obligation to
              which JOBLINK.NG is subject:
            </li>
            <li>
              processing is necessary in order to protect the vital interests of
              the Data Subject or of another natural person:
            </li>
            <li>
              processing is necessary for the performance of a task carried out
              in the public interest or in the exercise of official public
              mandate vested in JOBLINK.NG.
            </li>
          </ol>
        </div>
        <div>
          <h2 className="text-xl font-semibold mt-4">
            {" "}
            We collect your personal data when you do any of the following
          </h2>
          <ul>
            <li>Buy or use any of our products and services:</li>
            <li>Use our network or other JOBLINK.NG products and services</li>
            <li>Register for a specific product or service:</li>
            <li>
              {" "}
              Fill in your information on our KYC registration form,
              self-service applications, social media platforms:
            </li>
            <li> Visit or browse our website</li>
            <li>
              Have given permission to other companies to share information
              about you
            </li>
            <li>Where your information is publicly available</li>
            <li>Are the customers of a business we acquire or:</li>
            <li> Take part in a competition, prize draw, or survey.</li>
          </ul>
          <p>
            {" "}
            Personal data we have about our customers, where applicable include
            name, phone number, address, sex, photograph, ID card number,
            fingerprint, educational information, job experiences, signature,
            etc.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mt-4">Consent</h2>
          <p>
            Where the processing of Personal Data is based on consent,
            JOBLINK.NG shall obtain the requisite consent of Data Subjects at
            the time of collection of Personal Data. In this regard, JOBLINK.NG
            will ensure
          </p>
          <ol className="pl-4" style={{listStyleType:"decimal"}}>
            <li>
              {" "}
              that the specific purpose of collection is made known to the Data
              Subject and the Consent is requested in clear and plain language:
            </li>
            <li>
              that the Consent is freely given by the Data Subject and obtained
              without fraud, coercion, or undue influence
            </li>
            <li>
              {" "}
              that the Consent is sufficiently distinct from other matters to
              which the Data Subject has agreed
            </li>
            <li>
              {" "}
              that the Consent is explicitly provided in an affirmative manner:
            </li>
            <li>
              that Consent is obtained for each purpose of Personal Data
              collection and processing:
            </li>
            <li>
              {" "}
              that it is clearly communicated to and understood by Data Subjects
              that they can update, manage or withdraw their consent at any time
            </li>
          </ol>
        </div>
        <div>
          <h2 className="text-xl font-semibold mt-4">Valid Consent</h2>
          <ol className="pl-4" style={{listStyleType:"decimal"}}>
            <li>
              For Consent to be valid, it must be given voluntarily by an
              appropriately informed Data Subject. In line with regulatory
              requirements, Consent cannot be implied. Silence, pre-ticked
              boxes, or inactivity does not constitute Consent under the NDPR.
            </li>
          </ol>
          <h3>Consent of minors</h3>
          <p>
            {" "}
            In the unlikely event that we deal with minors, the consent of
            minors will always be protected and obtained from minors’
            representatives in accordance with applicable regulatory
            requirements.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mt-4"> Data Subject Rights</h2>
          <ol className="pl-4" style={{listStyleType:"decimal"}}>
            <li>
              All individuals who are the subject of Personal Data held by
              JOBLINK.NG are entitled to the following rights
            </li>
            <ol className="pl-4" style={{listStyleType:"lower-alpha"}}>
              <li>
                ight to request for and access their Personal Data collected and
                stored. Where data is held electronically in a structured form,
                such as in a database, the Data Subject has a right to receive
                that data in a common electronic format:
              </li>
              <li>
                {" "}
                Right to information on their personal data collected and stored
              </li>
              <li> Right to objection or request for restriction</li>
              <li> Right to object to automated decision making</li>
              <li>
                {" "}
                Right to request rectification and modification of their data
                which JOBLINK.NG keeps
              </li>
              <li>
                Right to request deletion of their data, except as restricted by
                law or JOBLINK.NG&apos;s statutory obligations
              </li>
              <li>
                {" "}
                Right to request the movement of data from JOBLINK.NG to a Third
                Party; this is the right to the portability of data; and
              </li>
              <li>
                {" "}
                Right to object to, and to request that JOBLINK.NG restricts the
                processing of their information except as required by law or
                JOBLINK.NG&apos;s statutory obligations.
              </li>
              <li>To opt out of marketing and unsolicited messages:</li>
            </ol>
            <li>
              If you no longer want to receive marketing messages from
              JOBLINK.NG, you can choose to opt out at any time. If you&apos;ve
              previously opted in to receive personalized content based on how
              and where you use our platform, you can also opt out at any time
            </li>
            <li>There are various ways to opt out</li>
            <ul>
              <li> Contact our customer services team</li>
              <li> Click the unsubscribe icon or link from our email:</li>
              <li>
                Disable push notification messages, including marketing
                messages, at any time in our apps/platform by changing the
                notification/alert settings on your device or by uninstalling
                the app
              </li>
            </ul>
            <li>
              {" "}
              JOBLINK.NG&aos;s well-defined procedure regarding how to handle
              and answer Data Subject’s requests are contained in
              JOBLINK.NG&apos;s Data Subject Access Request Policy
            </li>
            <li>
              Data Subjects can exercise any of their rights by completing the
              JOBLINK.NG’s Subject Access Request (SAR) Form and submitting it
              to the Company via @JOBLINK.NG or info@joblin.ng
            </li>
          </ol>
        </div>
        <div>
          <h2 className="text-xl font-semibold mt-4">
            {" "}
            Transfer of Personal data
          </h2>
          <h3 className="text-xl"> Third-Party Processor within Nigeria</h3>
          <p>
            JOBLINK.NG may engage the services of third parties in order to
            process your Personal Data collected by us. The processing by such
            third parties shall be governed by a written contract with
            JOBLINK.NG to ensure adequate protection and security measures are
            put in place by the third party for the protection of Personal Data
            in accordance with the terms of this Policy and the NDPR. We may
            also share your personal data with law enforcement agencies where
            required by law to do so. Where applicable, JOBLINK.NG will share
            your information with
          </p>
          <ol className="pl-4" style={{listStyleType:"decimal"}}>
            <li>Partners, suppliers, or agents involved in delivering the products and services you’ve ordered or used. For example, when you apply for a job, your job request may be handled by our 
business partner who is bound by contract to protect your personal data</li>
<li> Law enforcement agencies, government bodies, regulatory organizations, courts, or other public authorities if we have to, or are authorized to by law. For example, under the 
Cybercrimes Act, a law enforcement agency may request a service provider to keep or release any traffic data, subscriber information, content, or non-content information. This is 
however for law enforcement purposes only</li>
<li>
A third party or body where such disclosure is required to satisfy any applicable law or other legal or regulatory requirements e.g to detect or prevent fraud or the commission of any 
other crime
</li>
<li>
A merging or acquiring entity where we undergo business reorganization e.g merger, acquisition, or takeover.
</li>
          </ol>
        </div>
        <div>
          <h2 className="text-xl font-semibold mt-4">Transfer of Personal Data to Foreign Country</h2>
          <ol className="pl-4" style={{listStyleType:"decimal"}}>
            <li> Where Personal Data is to be transferred to a country outside Nigeria, JOBLINK.NG shall put adequate measures in place to ensure the security of such Personal Data. In particular, 
JOBLINK.NG shall, among other things, conduct a detailed assessment of whether the said country is on the National Information Technology Development Agency (NITDA) White 
List of Countries with adequate data protection laws</li>
<li>
Transfer of Personal Data out of Nigeria would be in accordance with the provisions of the NDPR. JOBLINK.NG will therefore only transfer Personal Data out of Nigeria on one of the 
following conditions
<ol className="pl-4" style={{listStyleType:"lower-alpha"}}>
  <li> The consent of the Data Subject has been obtained</li>
  <li>The transfer is necessary for the performance of a contract between JOBLINK.NG and the Data Subject or implementation of pre-contractual measures taken at the Data Subject’s 
request</li>
<li>The transfer is necessary to conclude a contract between JOBLINK.NG and a third party in the interest of the Data Subject:</li>
<li> The transfer is necessary for reason of public interest</li>
<li> The transfer is for the establishment, exercise, or defense of legal claims</li>
<li> The transfer is necessary in order to protect the vital interests of the Data Subjects or other persons, where the Data Subject is physically or legally incapable of giving consent. 
Provided, in all circumstances, that the Data Subject has been manifestly made to understand through clear warnings of the specific principle(s) of data protection that are likely to 
be violated in the event of transfer to a third country, this proviso shall not apply to any instance where the Data Subject is answerable in duly established legal action for any civil 
or criminal claim in a third country. JOBLINK.NG will take all necessary steps to ensure that the Personal Data is transmitted in a safe and secure manner. Details of the protection 
given to your information when it is transferred outside Nigeria shall be provided to you upon request</li>

</ol>
</li>
<li>Where the recipient country is not on the White List and none of the conditions stipulated in Section 2 of this Policy is met, JOBLINK.NG will engage with NITDA and the Office of the 
Honorable Attorney General of the Federation (HAGF) for approval with respect to such transfer.</li>
          </ol>
        </div>
        <div>
          <h2 className="text-xl font-semibold mt-4">Website Privacy Notice</h2>
          <h4> What is this Privacy Notice for?</h4>
          <p>OBLINK.NG Nigeria (“JOBLINK.NG”, “the Company”, or “We”) values your Personal Data and we are committed to protecting your privacy whenever you interact with us. Please read this 
Privacy Notice (Notice) to understand our policies, processes, and procedures regarding the processing of your personal data.
 By this Notice, we explain to you how your Personal Data is collected, used, managed, and transferred by JOBLINK.NG and also explain how you can update your Personal Data with us 
and exercise your rights in respect of the Personal Data provided to us.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mt-4">The Personal Data that We Collect</h2>
          <p>We collect Personal Data that you give to us. For example, when you create an account with us, request further information about our product, fill out a form, apply for a job through our 
website or subscribe to newsletters on our website.</p>
<p> We may also automatically collect some technical information when you visit our website such as your IP address and information about your visit such as the pages that you viewed. 
This information helps us understand customer interests and helps us improve our website. When you visit our site, the pages that you look at, and a short text file called a cookie, are 
downloaded to your computer. By visiting and using our website, you agree to our use of cookies in line with JOBLINK.NG’s policies</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mt-4">For What Purpose do we use your Personal Data?</h2>
          <p> We may process your Personal Data to communicate with you (including sending marketing or promotional materials to you), provide you with further information about our products and 
how we can serve you better, respond to your requests, process your application for employment with JOBLINK.NG or to fulfill our contractual obligations with you. We may also process 
your Personal Data to comply with provisions of applicable laws.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mt-4"> What Constitutes your Consent?</h2>
          <p> Where the processing of Personal Data is based on consent, We shall obtain the requisite consent at the time of collection of the Personal Data. In this regard, you consent to the 
processing of your Personal Data when you access our platforms or use our services, content, features, technologies, or functions offered on our website or other digital platforms. You 
can withdraw your consent at any time but such withdrawal will not affect the lawfulness of processing based on consent given before its withdrawal</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mt-4"> Who do we share your Personal Data with?</h2>
          <p>We respect your privacy and we limit the disclosure of your Personal Data to third parties. We do not sell, give or trade any Personal Data that we obtain from you to any third party for 
data- mining or marketing purposes. However, We may share your Personal Data with companies within JOBLINK.NG, service providers engaged by us to provide services to JOBLINK.NG 
subject to appropriate data security and protection. In addition, We may transfer your Personal Data out of Nigeria in line with the requirements of the Nigeria Data Protection Regulation, 
2019. We may also share your information where there is a regulatory or statutory obligation to disclose such Personal Data in accordance with provisions of applicable laws.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mt-4">Security of Your Personal Data</h2>
          <p>We take the security of your Personal Data seriously and We make every effort to keep your Personal Data secure. We have put in place technological and organizational procedures, 
including requiring our staff and any third parties who carry out any work on our behalf to comply with appropriate security standards in order to protect your Personal Data.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mt-4">Retention of Your Personal Data</h2>
          <p>We take appropriate measures to ensure that your Personal Data is only Processed for the minimum period necessary in line with the purposes set out in this Notice or as required by 
applicable laws until a time it is no longer required or has no use. Once your Personal Data is no longer required, we destroy it in a safe and secure manner</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mt-4">Your Rights</h2>
          <p></p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mt-4"></h2>
          <p>JOBLINK.NG collects Personal Data only for the purposes identified in this Policy and such information cannot be reused for another purpose that is incompatible with the original 
purpose.<br/>
You can exercise the following rights with respect to your Personal Data with JOBLINK.NG</p>
<ol className="pl-4" style={{listStyleType:"decimal"}}>
  <li>request for and access your Personal Data collected and stored by JOBLINK.NG</li>
  <li> withdraw consent at any time. For example, you can withdraw your consent to the receipt of our marketing or promotional materials or unsubscribe to our newsletters:</li>
  <li> object to automated decision making</li>
  <li> request rectification and modification of Personal Data kept by JOBLINK.NG</li>
  <li> request for deletion of your Personal Data</li>
  <li> be informed of and entitled to provide consent prior to the processing of Personal Data for purposes other than that for which the Personal Data was collected:</li>
  <li>request that JOBLINK.NG restricts processing of your Personal Data:</li>
  <li> request for information regarding any specific processing of your personal data. If you wish to exercise any of these rights you may contact our Data Protection Officer (DPO) using the 
contact details provided below. You also have the right to complain to the National Information Technology Development Agency (NITDA) if you believe that we have violated your 
privacy rights.</li>
</ol>
        </div>
        <div>
          <h2 className="text-xl font-semibold mt-4"> Variation on our Privacy Notice</h2>
          <p>Due to constant changes in technology and regulatory requirements, we may need to change our privacy policies or update this Notice from time to time. You will always be able to find 
the most recent version of our updated privacy policy on this site.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mt-4">Contact & Communication</h2>
          <p> If you would like further information on this Notice, or to contact our DPO, you may contact us at JOBLINK.NG Nigeria, 15th Floor, Elephant House, 214 Broad Street, Marina, Lagos, 
Nigeria or at @JOBLINK.NG or info@joblink.ng</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mt-4"> Changes to the Policy</h2>
          <p> JOBLINK.NG reserves the right to change, amend or alter this Policy at any point in time. If we amend this Policy, we will provide you with the updated version</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mt-4">Glossary</h2>
          <ul>
            <li>"Consent" means any freely given, specific, informed, and unambiguous indication of the Data Subject's wishes by which he or she, through a statement or a clear affirmative action, 
signifies agreement to the processing of Personal Data relating to him or her</li>
<li>“Database” means a collection of data organized in a manner that allows access, retrieval, deletion, and processing of that data; it includes but is not limited to structured, 
unstructured, cached, and file system type Databases</li>
<li>“Data Processor” means a person or organization that processes Personal Data on behalf and on instructions of JOBLINK.NG Nigeria</li>
<li>“DPC” means an organization registered by NITDA to provide data protection audit, compliance, and training services to public and private organizations that process Personal Data in 
Nigeria</li>
<li> “Data Subject” means any person, who can be identified, directly or indirectly, by reference to an identification number or to one or more factors specific to his physical, physiological, 
mental, economic, cultural, or social identity</li>
<li> “NDPR” means the Nigeria Data Protection Regulation, 2019</li>
<li>“Personal Data” means any information relating to an identified or identifiable natural person (‘Data Subject’); an identifiable natural person is one who can be identified, directly or 
indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, 
physiological, genetic, mental, economic, cultural or social identity of that natural person; It can be anything from a name, address, a photo, an email address, bank details, posts on 
social networking websites, medical information, and another unique identifier such as but not limited to MAC address, IP address, IMEI number, IMSI number, SIM, Personal 
Identifiable Information (PII) and others</li>
<li>“Sensitive Personal Data” means data relating to religious or other beliefs, sexual orientation, health, race, ethnicity, political views, trades union membership, criminal records, or any 
other sensitive personal information.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mt-4">Contact Information</h2>
          <p> If you have questions or complaints regarding this Policy, you can also reach us by sending mail to the following email addresses</p>
          <li> Nigeria: info&copy;JOBLINK.NG or joblink.ng</li>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}

export default Privacy;
