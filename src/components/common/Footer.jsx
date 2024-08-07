import { Typography } from "@material-tailwind/react";
 
const Footer = () => {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 md:justify-between">
      <Typography color="blue-gray" className="font-normal">
        &copy; 2023 LeschisMore Pty Ltd
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            About
          </Typography>
        </li>
        {/* <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            License
          </Typography>
        </li> */}
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contribute
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contact
          </Typography>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;