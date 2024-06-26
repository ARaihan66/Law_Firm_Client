import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";

export default function termsConditions() {
  const termsAndConditionsData = [
    {
      title: "Introduction and Acceptance of Terms",
      body: "By accessing our website or utilizing our services, you agree to comply with these Terms. If you do not agree with any provision, please refrain from using our website or services.",
    },

    {
      title: "Legal Services",
      body: "The Firm provides legal services, including advice and representation, subject to jurisdictional rules. Outcome guarantees are not provided.",
    },
    {
      title: "Client Relationship",
      body: "No attorney-client relationship is established through website use. Confidentiality complies with professional conduct rules and our Privacy Policy.",
    },
    {
      title: "Intellectual Property:",
      body: "Content on our website is our intellectual property protected by copyright laws. Reproduction or modification without consent is prohibited.",
    },
    {
      title: "Limitation of Liability",
      body: "The Firm is not liable for damages arising from website or service use beyond what is permitted by law.",
    },
    {
      title: "Third-Party Websites",
      body: "Links to third-party websites are provided for convenience only. We do not endorse or take responsibility for their content or practices.",
    },
    {
      title: "Termination",
      body: "We reserve the right to suspend or terminate access without notice for violations of these Terms or laws.",
    },
    {
      title: "Governing Law and Jurisdiction",
      body: "These Terms are governed by [Jurisdiction] laws, with disputes subject to [Jurisdiction] courts.",
    },
    {
      title: "Severability",
      body: "If any provision is found invalid, remaining provisions will remain valid and enforceable.",
    },
    {
      title: "Entire Agreement",
      body: "These Terms constitute the entire agreement, superseding any prior agreements, written or oral.",
    },
    {
      title: "Amendments",
      body: "We reserve the right to modify these Terms without notice. Continued use after changes signifies acceptance of the modified Terms.",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <h1 className="uppercase my-10 text-2xl font-bold">
        Terms and Conditions
      </h1>
      <div className="mx-4 md:w-[32rem]">
        <Timeline>
          {termsAndConditionsData.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineConnector />
              <TimelineHeader className="h-3">
                <TimelineIcon />
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="leading-none"
                >
                  {item.title}
                </Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography
                  variant="small"
                  color="gary"
                  className="font-normal text-gray-600"
                >
                  {item.body}
                </Typography>
              </TimelineBody>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </div>
  );
}
