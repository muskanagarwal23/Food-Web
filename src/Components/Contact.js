import { Link } from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
const Contact = () => {
      return(
        <div>
            <h1 className="font-bold text-3xl"> Contact Us</h1>
            
            <h2 className="inline-block m-4 border-[1px] w-[150px] text-lg text-center rounded-2xl hover:scale-105">
            <Link 
             to = "https://www.linkedin.com/in/muskan-agarwal-b23450267/">
              <LinkedInIcon/>
             Linkedin </Link>
            </h2>
            <h2 className="inline-block m-4 border-[1px] w-[150px] text-lg text-center rounded-2xl hover:scale-105">
            <Link 
             to = "https://github.com/muskanagarwal23">
             <GitHubIcon/>
             GitHub </Link>
            </h2>
            <h2 className="inline-block m-4 border-[1px] w-[150px] text-lg text-center rounded-2xl hover:scale-105">
            <Link 
             to = "https://leetcode.com/u/EJdnItnst3/">
             <CodeIcon/>
             leetcode </Link>
            </h2>
            
        </div>
      )
}
 export default Contact;