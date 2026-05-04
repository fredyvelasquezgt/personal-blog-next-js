import { Fragment } from "react";
// import ConctactForm from "../components/contact/contact-form";
import ContactInfo from "../components/contact/contact-info";
import Head from "next/head";

function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Get in touch with Fredy Velasquez" />
      </Head>
      <ContactInfo />
      {/* <ConctactForm /> */}
    </Fragment>
  );
}

export default ContactPage;
