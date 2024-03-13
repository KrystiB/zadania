/* eslint-disable react/prop-types */
import CompanyInfo from "../CompanyInfo/CompanyInfo";
import SocialLinks from "../SocialLinks/SocialLinks";
import FooterLinks from "../FooterLinks/FooterLinks";

const Footer = ({ footer }) => {
  const { company, socials, links } = footer;

  return (
    <footer>
      {company && <CompanyInfo company={company} />}
      {socials && <SocialLinks socials={socials} />}
      {links && <FooterLinks links={links} />}
    </footer>
  );
};

export default Footer;
