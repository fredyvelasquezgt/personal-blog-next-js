import { Fragment } from "react";
import ConctactForm from "../components/contact/contact-form";
import Head from "next/head";

function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="send your messages" />
      </Head>
      <ConctactForm />
    </Fragment>
  );
}

export default ContactPage;
