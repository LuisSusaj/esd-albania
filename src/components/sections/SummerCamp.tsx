import { Flex, Heading, Text, Stack, Image, Box, Fade } from "@chakra-ui/react";
import I18n from "../../i18n/I18n";
import { aboutUs } from "../../assets";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SummerCamp = () => {
  const [animation, setAnimation] = useState(false);
  useEffect(() => {
    setAnimation(true);
  }, []);
  return (
    <Fade in={animation}>
      <Flex
        align="center"
        justify={{ base: "center", md: "space-around", xl: "space-between" }}
        direction={{ base: "column-reverse", md: "column-reverse" }}
        wrap="nowrap"
        px={8}
        mb={16}
      >
        <Box w={"100%"} mb={{ base: 12, md: 0 }}>
          <Image src={aboutUs} sizes="100%" rounded="1rem" shadow="2xl" />
        </Box>
        <Stack
          spacing={4}
          align={["center", "center", "flex-start", "flex-start"]}
          w={'100%'}
          mb={10}
        >
          <Heading
            as="h1"
            size="xl"
            fontWeight="bold"
            color="primary.800"
            textAlign={["center", "center", "left", "left"]}
          >
            <I18n text="about_us_title" />
          </Heading>
          <div id="zqEu5_" data-qa="gridtextbox:zqeu5_">
            <h5>
                <span >SUMMER CAMP - REFRESH TRAINING - FOR ESD TEACHERS</span>
                </h5><p ><span>EMPOWERMENT SELF DEFENSE FOR CHILDREN &amp; YOUTH</span></p><p><span><em>This training is organized as part of the ongoing support for the ESD extracurricular activities in schools “Personal Security for Children and Youth” applied in the National Program “Art, Craft and Sports”</em></span></p>
                <p ><span>The Empowerment through Self Defense for schools in Albania is a joint initiative of ESD Albania and UN Women in Albania under the Project “For Gender-Sensitive Post-Earthquake Recovery and Reconstruction”, financially supported by the Government of Sweden through the UN SDG fund in Albania. Its focus is reducing inequality and the vulnerability of women and girls in the main areas affected by the deadly earthquake that hit Albania in 2019.</span></p>
                <p >
                    <span>Since 2019, ESD Albania has been working on expanding the number of ESD instructors in Albania and empowering women and youth through community outreach and educational interventions programs while also carrying out a joint advocacy effort with UN Women in Albania to include ESD classes in the National Strategy for Extra-curricular Activities in public schools, as a methodology for reducing and responding to violence.</span><br/><br/>
                    <span>Between August 2022 and March 2023, ESD Albania has been implementing the project "Capacity building and training on Empowerment Through Self Defense for 60 teachers in 60 schools in Albania” with the goal of Providing capacity-building activities for a pool of 60 teachers working in 60 public schools to start applying ESD methodology, during the academic year 2022-2023 and beyond, given the roll-out of the ESD integration in extra-curricular activities as required by the National Strategy for Youth and its Action Plan (2022-2029).</span></p>
                    <p></p>
                    <p>
                        <span>With the aim to provide continuous support and capacity building activities on Empowerment through Self-Defense for the qualified ESD teachers in schools and ESD professionals the following activity undertaken is a 3 day Refresh Training activity planned to be held (tentative date) on the 7-9 September 2023 at Location TBC</span></p><p><span>This refresh training has been deemed necessary to consolidate knowledge, skills and techniques while also fostering networking between ESD teachers and ESD instructors and also other relevant school staff and involved stakeholders.</span></p></div>
        </Stack>
      </Flex>
    </Fade>
  );
};
export default SummerCamp;
