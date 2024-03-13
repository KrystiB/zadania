/* eslint-disable react/prop-types */

const FooterLinks = ({ links }) => {
  return (
    <div className="footer-links">
      <ul>
        {Object.entries(links).map(([key, value]) => (
          <li key={key}>
            <a href={value}>{key}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
