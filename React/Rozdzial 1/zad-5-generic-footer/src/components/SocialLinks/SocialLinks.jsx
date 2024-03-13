/* eslint-disable react/prop-types */

const SocialLinks = ({ socials }) => {
  return (
    <div className="social-links">
      {Object.entries(socials).map(([key, value]) => (
        <a key={key} href={value} target="_blank" rel="noopener noreferrer">
          <img src={`/${key}.png`} alt={key} style={{ width: 20, height: 20 }} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
