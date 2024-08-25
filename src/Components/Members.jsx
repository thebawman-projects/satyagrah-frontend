import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

// import {
//     Tooltip,
//     TooltipContent,
//     TooltipProvider,
//     TooltipTrigger,
// } from "./ui/tooltip";
import { ScrollArea } from "./ui/scroll-area";

import mentor from "../images/mentor.jpg";
import bodsat from "../images/bodsat.jpeg";
import Member from "./Home/Member";
const currentYear = new Date().getFullYear();
const Members = () => {

    return (
        <div className="min-h-[80vh] flex items-center justify-center  xl:py-0">
            <div className="container mx-auto">
                <Tabs
                    defaultValue="members"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="chairman">Chairman Message</TabsTrigger>
                        <TabsTrigger value="boardofdirctor">Board Of Director</TabsTrigger>
                        <TabsTrigger value="members">Members</TabsTrigger>
                        <TabsTrigger value="about"> About SECT</TabsTrigger>
                        <TabsTrigger value="appeal"> An Appeal To Parents</TabsTrigger>
                    </TabsList>
                    {/* Content  */}
                    <div className="min-h-[70vh] w-full">
                        {/* Chairman Message  */}
                        <TabsContent value="chairman" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <ScrollArea className="h-[600px]">
                                    <div className="flex flex-col-reverse md:flex-row items-center justify-center bg-slate-100 text-black md:p-8 xl:p-8 p-2">
                                        <div className="md:w-1/2 md:mr-4 mt-4 md:mt-0">
                                            <h1 className="text-3xl font-bold  mb-4">
                                                Chairman Message
                                            </h1>
                                            <p className=" text-justify leading-relaxed">
                                                Dear Students, I am thrilled to address you all as the Chairman of
                                                Satyagrah Educational And Charitable Trust, a foundation that strives
                                                to make a difference in the world of education. Our vision is to
                                                provide quality education to underprivileged students and make it
                                                accessible to everyone, absolutely free of cost. I am humbled to
                                                share that our efforts have been recognized by various
                                                organizations,  and dedication of the entire Satyagrah team, and we
                                                will continue to work towards our mission of providing quality
                                                education to every deserving student. We understand that financial
                                                constraints can often become a hindrance in pursuing one's dreams,
                                                and we are here to support you in every possible way. Our
                                                scholarship program has already benefited lakhs of students, and we
                                                hope to continue doing so in the years to come. At Satyagrah
                                                Educational And Charitable Trust, we strongly believe that a
                                                student's potential cannot be measured by a mere report card. Our
                                                educational system must take a holistic approach towards the
                                                development of students and provide them with the necessary guidance
                                                and support to achieve their goals. As we move forward, we encourage
                                                you to dream big and pursue your passion with all your heart. Our
                                                team of dedicated teachers and mentors will be there to support and
                                                guide you every step of the way. In the words of Dr. APJ Abdul
                                                Kalam, "Small aim is a crime." We urge you to aim for the stars and
                                                achieve what you truly deserve. We are committed to being your
                                                partner in this journey, and we wish you all the very best.
                                                <br />~ Warm regards,
                                                <br />
                                                Abhinav Akarsh
                                                <br />
                                                Founder and Chairman, Satyagrah Educational And Charitable Trust
                                            </p>
                                        </div>
                                        <div className="md:w-[30%] md:ml-4">
                                            <img
                                                src={mentor}
                                                alt="About us"
                                                className="w-full h-full object-cover rounded-lg"
                                            />
                                        </div>
                                    </div>

                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* BOD Message  */}
                        <TabsContent value="boardofdirctor" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">



                                <ScrollArea className="h-[600px]">
                                    <div className="flex flex-col-reverse md:flex-row items-center justify-center  bg-slate-100 text-black md:p-8 xl:p-8 p-2">
                                        <div className="md:w-1/2 md:mr-4 mt-4 md:mt-0">
                                            <h1 className="text-3xl font-bold  mb-4">
                                                Board Of Director
                                            </h1>
                                            <p className=" text-justify leading-relaxed">
                                                Satyagrah Trust believes in the transformative power of education by our dedications and full determinations to make an easy way for the aspiring students to achieve their dreams.
                                                <br />~ Warm regards,
                                                <br />
                                                Shailendra Kumar
                                                <br />
                                                Board Of Director, Satyagrah Educational And Charitable Trust
                                            </p>
                                        </div>
                                        <div className="md:w-[30%] md:ml-4">
                                            <img
                                                src={bodsat}
                                                alt="About us"
                                                className="w-full h-full object-cover rounded-lg"
                                            />
                                        </div>
                                    </div>

                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* About US  */}
                        <TabsContent value="about" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <ScrollArea className="h-[600px]">
                                    <div className="flex flex-col-reverse md:flex-row text-black bg-slate-100 items-center justify-center  md:p-8 xl:p-8">
                                        <div className="md:w-1/2 md:mr-4 mt-4 md:mt-0"></div>
                                        <div>
                                            <h1 className="text-3xl font-bold  mb-4">About Us</h1>
                                            <p className="text-justify ">
                                                Satyagrah Educational And Charitable Trust is a shining example of how
                                                a single individual's vision can turn into a social movement that
                                                impacts thousands of lives. Founded and chaired by Abhinav Akarsh in
                                                2021, the trust was registered as an institution on August 30, 2020,
                                                with the aim of making a difference in the world of education in
                                                India. Over the past decade, Satyagrah has become a self-reliant force
                                                that has helped thousands of students realize their dreams of
                                                pursuing higher education. The trust has earned more than 5000
                                                success stories, and its tireless efforts have touched the lives of
                                                students in more than a dozen states across India, including Bihar,
                                                Jammu & Kashmir, Punjab, Uttar Pradesh, Uttarakhand, Delhi, Haryana,
                                                Rajasthan, Madhya Pradesh, Odisha, West Bengal, Karnataka, Andhra
                                                Pradesh, Tamil Nadu & Andman and Nicobar Islands. One of the most
                                                remarkable things about Satyagrah is that it has successfully helped
                                                more than 11500 students after 10th grade, more than 12500+ students
                                                after 12th grade, and more than 20000+ students after graduation
                                                level. Satyagrah Educational And Charitable Trust is focused on the
                                                educational field and has a vision to increase the gross enrollment
                                                ratio (GER) in India. As long as the students have a minimum of 50%
                                                marks in 10th or 12th from any stream, whether it be arts, commerce,
                                                or science background, they are eligible for the scholarship. In
                                                addition to providing financial assistance with up to 100%
                                                scholarship for their dream course, Satyagrah Educational And
                                                Charitable Trust also offers mentorship and career guidance to these
                                                students to help them achieve their full potential. This support
                                                helps students from underprivileged backgrounds overcome the
                                                challenges they may face and succeed in their academic and
                                                professional pursuits. Through this partnership with government
                                                universities, Satyagrah Educational And Charitable Trust is creating
                                                opportunities for underprivileged students to pursue higher
                                                education and build a brighter future for themselves and their
                                                families. By providing access to vacant seats and financial
                                                assistance, Satyagrah Educational And Charitable Trust is helping to
                                                bridge the gap between deserving students and higher education in
                                                India. The ultimate goal of Satyagrah is to increase the Gross
                                                Enrollment Ratio (GER) in higher education in India by making
                                                technical education accessible to more students from underprivileged
                                                backgrounds. Satyagrah Educational And Charitable Trust approach
                                                involves partnering with educational institutions, government
                                                agencies, and companies to provide financial assistance,
                                                scholarships, and other resources to deserving students. Mr. Abhinav
                                                Akarsh, the Chairman and Founder of the Trust, dreams of sharing
                                                this concept with industrialists to help make India educated and
                                                skilled like Europe. Through Satyagrah, Satyagrah Educational And
                                                Charitable Trust hopes to inspire more people to join them in their
                                                mission of increasing the GER in higher education in India.
                                                Industrialists can play a significant role in supporting Satyagrah
                                                Educational And Charitable Trust mission by partnering with them to
                                                provide financial assistance, scholarships, and other resources to
                                                deserving students. By investing in the education of underprivileged
                                                students, they can help create a skilled workforce that will
                                                contribute to the development of our country. Furthermore,
                                                industrialists can also support Satyagrah Educational And Charitable
                                                Trust by creating awareness about the importance of education in the
                                                development of our country. By doing so, they can encourage more
                                                people to support this cause and work towards increasing the GER in
                                                higher education in India.
                                            </p>
                                        </div>
                                    </div>

                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* Members  */}
                        <TabsContent value="members" className="w-full">
                            <div className="flex flex-col text-center xl:text-left">
                                <ScrollArea className="h-[600px]">
                                    <div className="flex flex-col-reverse md:flex-row text-black bg-slate-100 items-center justify-center  md:p-8 xl:p-8">

                                        <div>
                                            <h1 className="text-3xl font-bold  mb-4">Board Members</h1>
                                            <Member />
                                        </div>
                                    </div>

                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* Appleal to Parents */}
                        <TabsContent value="appeal" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <ScrollArea className="h-[600px]">
                                    <div className="flex flex-col-reverse md:flex-row text-black bg-slate-100 items-center justify-center  md:p-8 xl:p-8 p-2">
                                        <div className="md:w-1/2 md:mr-4 mt-4 md:mt-0"></div>
                                        <div>
                                            <h1 className="text-3xl font-bold  mb-4">An Appeal to Parents</h1>
                                            <p className="text-justify ">
                                                Have you ever dreamt of science and its wonders? Have you ever
                                                seen yourself as the creator of something like it one day?
                                                Have you felt the rush of passion? Have you desired for the
                                                career of your own choice in engineering, management, or
                                                paramedical field but have to compromise your dreams because
                                                of lack of resources? Not anymore. Getting technical,
                                                management or paramedical education for students all over the
                                                country is now made easy. "VARDAAN" A Satyagrah Educational And
                                                Charitable Trust initiative, which will empower every
                                                undergraduate to pursue his/her dreams without any concern for
                                                financial hassles. So if you have secured 50% marks, (PCB,
                                                PCM, Arts, Commerce) walk in to our office and assure your
                                                future. We offer a wide range of courses in technical,
                                                management and paramedical fields. Our technical courses
                                                include B.Tech in various specializations such as Civil
                                                Engineering, Mechanical Engineering, Electrical Engineering,
                                                Electronics and Communication Engineering, Computer Science
                                                Engineering, and many more. Our management courses include
                                                BBA, MBA, and other diploma courses in management. We also
                                                offer various paramedical courses such as B.Sc Nursing, GNM,
                                                ANM, and other diploma courses. We have already empowered
                                                thousands of dreams. It is your turn now. Mr. Akarsh, Chairman
                                                of the trust, has sincerely appealed to all the concerned
                                                parents to put their worries to rest. Your dreams are ours
                                                now. A lot of parents fail to assess the capability of their
                                                children because it is our firm belief that report card do not
                                                necessarily reflect your child's prowess. We, at Satyagrah
                                                Educational And Charitable Trust, aim to provide your child
                                                not merely technical education but education with the location
                                                and course of one's choice. Mr. Akarsh has asked all the
                                                concerned parents to reach us on (WhatsApp No.-7667102184) and
                                                put their dilemmas and fears to rest. We are here to help you,
                                                without a penny, of course. It would be our honor to empower
                                                you towards your dreams. We hope that every parent walks out
                                                of our office with an assured future for their children. After
                                                an extensive survey ranging across almost half the Indian
                                                subcontinent, we strongly feel that there is an urgent need
                                                for the middle-class population to be more vocal and assertive
                                                about their needs. A good chemistry amongst the teacher,
                                                student, and parents will be an extremely important step
                                                towards the brighter tomorrow for the students and the
                                                glorious nation alike. Join New Sessions 2024 Are you looking
                                                for a career in technical, management, or paramedical field
                                                but worried about the financial burden that comes with it?
                                                Worry no more as Satyagrah Educational & Charitable Trust has
                                                got you covered. Our "VARDAAN" initiative ensures that every
                                                undergraduate who has secured 50% marks in (PCB, PCM, Arts,
                                                Commerce) can pursue their dreams without any financial
                                                hassles. We offer a wide range of courses in technical,
                                                management, and paramedical fields. Our technical courses
                                                include B.Tech in various specializations such as Civil
                                                Engineering, Mechanical Engineering, Electrical Engineering,
                                                Electronics and Communication Engineering, Computer Science
                                                Engineering, and many more. Our management courses include
                                                BBA, MBA, and other diploma courses in management. We also
                                                offer various paramedical courses such as B.Sc Nursing, GNM,
                                                ANM, and other diploma courses. Our team of experienced
                                                professionals strives to provide the best education and
                                                guidance to students, ensuring that they achieve their desired
                                                career goals. We have already empowered thousands of dreams
                                                and we aim to continue doing so. To enroll in our courses for
                                                the session {currentYear + 1}, reach us on (WhatsApp No.-7667102184) and
                                                take the first step towards securing your future. Don't let
                                                financial constraints hold you back from achieving your
                                            </p>
                                        </div>
                                    </div>

                                </ScrollArea>
                            </div>
                        </TabsContent>

                    </div>
                </Tabs>
            </div>
        </div>
    );
};

export default Members;