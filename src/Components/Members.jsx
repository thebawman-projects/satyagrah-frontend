import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ScrollArea } from "./ui/scroll-area";
import mentor from "../images/mentor.jpg";
import bodsat from "../images/bodsat.jpeg";
import Member from "./Home/Member";

const currentYear = new Date().getFullYear();

const Members = () => {
  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, when: "beforeChildren" }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-[80vh] flex items-center justify-center xl:py-0"
    >
      <div className="container mx-auto px-4">
        <Tabs defaultValue="members" className="flex flex-col xl:flex-row gap-[60px]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={tabVariants}
          >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              {["chairman", "boardofdirctor", "members", "about", "appeal"].map((tab) => (
                <motion.div key={tab} variants={itemVariants}>
                  <TabsTrigger 
                    value={tab}
                    className="text-left transition-all duration-300 hover:scale-[1.02]"
                  >
                    {tab === "chairman" && "Chairman Message"}
                    {tab === "boardofdirctor" && "Board Of Director"}
                    {tab === "members" && "Members"}
                    {tab === "about" && "About SECT"}
                    {tab === "appeal" && "An Appeal To Parents"}
                  </TabsTrigger>
                </motion.div>
              ))}
            </TabsList>
          </motion.div>

          {/* Content */}
          <div className="min-h-[70vh] w-full">
            <AnimatePresence mode="wait">
              {/* Chairman Message */}
              <TabsContent value="chairman" className="w-full">
                <motion.div
                  key="chairman"
                  initial="hidden"
                  animate="visible"
                  variants={contentVariants}
                  exit="hidden"
                >
                  <ScrollArea className="h-[600px]">
                    <motion.div
                      variants={itemVariants}
                      className="flex flex-col-reverse md:flex-row items-center justify-center bg-slate-100 text-black md:p-8 xl:p-8 p-2 rounded-xl shadow-lg"
                    >
                      <div className="md:w-1/2 md:mr-4 mt-4 md:mt-0">
                        <motion.h1 
                          className="text-3xl font-bold mb-4"
                          initial={{ x: -20 }}
                          animate={{ x: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          Chairman Message
                        </motion.h1>
                        <motion.p 
                          className="text-justify leading-relaxed"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4 }}
                        >
                          Dear Students, I am thrilled to address you all as the Chairman of
                          Satyagrah Educational And Charitable Trust, a foundation that strives
                          to make a difference in the world of education. Our vision is to
                          provide quality education to underprivileged students and make it
                          accessible to everyone, absolutely free of cost. I am humbled to
                          share that our efforts have been recognized by various
                          organizations, and dedication of the entire Satyagrah team, and we
                          will continue to work towards our mission of providing quality
                          education to every deserving student.
                          <br /><br />
                          We understand that financial constraints can often become a hindrance in pursuing one's dreams,
                          and we are here to support you in every possible way. Our
                          scholarship program has already benefited lakhs of students, and we
                          hope to continue doing so in the years to come.
                          <br /><br />
                          ~ Warm regards,
                          <br />
                          <span className="font-semibold">Abhinav Akarsh</span>
                          <br />
                          Founder and Chairman, Satyagrah Educational And Charitable Trust
                        </motion.p>
                      </div>
                      <motion.div 
                        className="md:w-[30%] md:ml-4"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <img
                          src={mentor}
                          alt="Chairman"
                          className="w-full h-full object-cover rounded-lg shadow-md"
                        />
                      </motion.div>
                    </motion.div>
                  </ScrollArea>
                </motion.div>
              </TabsContent>

              {/* BOD Message */}
              <TabsContent value="boardofdirctor" className="w-full">
                <motion.div
                  key="boardofdirctor"
                  initial="hidden"
                  animate="visible"
                  variants={contentVariants}
                  exit="hidden"
                >
                  <ScrollArea className="h-[600px]">
                    <motion.div
                      variants={itemVariants}
                      className="flex flex-col-reverse md:flex-row items-center justify-center bg-slate-100 text-black md:p-8 xl:p-8 p-2 rounded-xl shadow-lg"
                    >
                      <div className="md:w-1/2 md:mr-4 mt-4 md:mt-0">
                        <motion.h1 
                          className="text-3xl font-bold mb-4"
                          initial={{ x: -20 }}
                          animate={{ x: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          Board Of Director
                        </motion.h1>
                        <motion.p 
                          className="text-justify leading-relaxed"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4 }}
                        >
                          Satyagrah Trust believes in the transformative power of education by our dedications and full determinations to make an easy way for the aspiring students to achieve their dreams.
                          <br /><br />
                          ~ Warm regards,
                          <br />
                          <span className="font-semibold">Shailendra Kumar</span>
                          <br />
                          Board Of Director, Satyagrah Educational And Charitable Trust
                        </motion.p>
                      </div>
                      <motion.div 
                        className="md:w-[30%] md:ml-4"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <img
                          src={bodsat}
                          alt="Board of Director"
                          className="w-full h-full object-cover rounded-lg shadow-md"
                        />
                      </motion.div>
                    </motion.div>
                  </ScrollArea>
                </motion.div>
              </TabsContent>

              {/* About US */}
              <TabsContent value="about" className="w-full">
                <motion.div
                  key="about"
                  initial="hidden"
                  animate="visible"
                  variants={contentVariants}
                  exit="hidden"
                >
                  <ScrollArea className="h-[600px]">
                    <motion.div
                      variants={itemVariants}
                      className="bg-slate-100 text-black md:p-8 xl:p-8 p-4 rounded-xl shadow-lg"
                    >
                      <motion.h1 
                        className="text-3xl font-bold mb-6 text-center"
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        About Us
                      </motion.h1>
                      <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        {[
                          "Satyagrah Educational And Charitable Trust is a shining example of how a single individual's vision can turn into a social movement that impacts thousands of lives.",
                          "Founded and chaired by Abhinav Akarsh in 2021, the trust was registered as an institution on August 30, 2020, with the aim of making a difference in the world of education in India.",
                          "Over the past decade, Satyagrah has become a self-reliant force that has helped thousands of students realize their dreams of pursuing higher education.",
                          "The trust has earned more than 5000 success stories, and its tireless efforts have touched the lives of students in more than a dozen states across India."
                        ].map((para, index) => (
                          <motion.p 
                            key={index}
                            className="text-justify leading-relaxed"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                          >
                            {para}
                          </motion.p>
                        ))}
                      </motion.div>
                    </motion.div>
                  </ScrollArea>
                </motion.div>
              </TabsContent>

              {/* Members */}
              <TabsContent value="members" className="w-full">
                <motion.div
                  key="members"
                  initial="hidden"
                  animate="visible"
                  variants={contentVariants}
                  exit="hidden"
                >
                  <ScrollArea className="h-[600px]">
                    <motion.div
                      variants={itemVariants}
                      className="bg-slate-100 text-black md:p-8 xl:p-8 p-4 rounded-xl shadow-lg"
                    >
                      <motion.h1 
                        className="text-3xl font-bold mb-6 text-center"
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        Board Members
                      </motion.h1>
                      <Member />
                    </motion.div>
                  </ScrollArea>
                </motion.div>
              </TabsContent>

              {/* Appeal to Parents */}
              <TabsContent value="appeal" className="w-full">
                <motion.div
                  key="appeal"
                  initial="hidden"
                  animate="visible"
                  variants={contentVariants}
                  exit="hidden"
                >
                  <ScrollArea className="h-[600px]">
                    <motion.div
                      variants={itemVariants}
                      className="bg-slate-100 text-black md:p-8 xl:p-8 p-4 rounded-xl shadow-lg"
                    >
                      <motion.h1 
                        className="text-3xl font-bold mb-6 text-center"
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        An Appeal to Parents
                      </motion.h1>
                      <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        {[
                          "Have you ever dreamt of science and its wonders? Have you ever seen yourself as the creator of something like it one day? Have you felt the rush of passion? Have you desired for the career of your own choice in engineering, management, or paramedical field but have to compromise your dreams because of lack of resources? Not anymore.",
                          `Getting technical, management or paramedical education for students all over the country is now made easy. "VARDAAN" A Satyagrah Educational And Charitable Trust initiative, which will empower every undergraduate to pursue his/her dreams without any concern for financial hassles. So if you have secured 50% marks, (PCB, PCM, Arts, Commerce) walk in to our office and assure your future.`,
                          `We offer a wide range of courses in technical, management and paramedical fields. Our technical courses include B.Tech in various specializations such as Civil Engineering, Mechanical Engineering, Electrical Engineering, Electronics and Communication Engineering, Computer Science Engineering, and many more.`,
                          `To enroll in our courses for the session ${currentYear + 1}, reach us on (WhatsApp No.-7667102184) and take the first step towards securing your future. Don't let financial constraints hold you back from achieving your dreams.`
                        ].map((para, index) => (
                          <motion.p 
                            key={index}
                            className="text-justify leading-relaxed"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                          >
                            {para}
                          </motion.p>
                        ))}
                      </motion.div>
                    </motion.div>
                  </ScrollArea>
                </motion.div>
              </TabsContent>
            </AnimatePresence>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Members;
