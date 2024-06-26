import { motion } from "framer-motion";
import { info } from "@/utils/contact-info";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center gap-[30px] ">
          {/* contact form */}
          <div className="w-full md:w-[80%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 backdrop-blur-xl bg-black/50 rounded-xl">
              <h3 className="text-4xl text-orange-300">Let's Work Together</h3>
              <p className="text-white/60">
                Reach out today to bring innovation and excellence to your team
                with my skills and expertise!
              </p>
              {/* Input fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname...." />
                <Input type="lastname" placeholder="Lastname...." />
                <Input type="email" placeholder="john.doe@example.com" />
                <Input type="phone" placeholder="Phone Number" />
              </div>
              {/* Select */}
              <Select defaultValue="">
                <SelectTrigger className="w-full ">
                  <SelectValue placeholder="Select a service..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web-developemnt">
                      Web Development
                    </SelectItem>
                    <SelectItem value="ui-ux">UI/UX</SelectItem>
                    <SelectItem value="logo-designer">Logo Designer</SelectItem>
                    <SelectItem value="seo">SEO</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* Text area */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
              />
              {/* button */}
              <Button size="md" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>
          {/* information */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[34px] h-[34px] md:w-[72px] md:h-[72px] bg-orange-300 text-primary rounded-md flex items-center justify-center">
                      <div className="text-[15px] md:text-[28px]">
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}:</p>
                      <h3 className="text-[12px] md:text-xl">
                        {item.description}
                      </h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
