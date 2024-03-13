/* eslint-disable react/prop-types */
const CompanyInfo = ({ company }) => {
  return (
    <div className="company-info">
      {company.logo && (
        <img src={company.logo} alt={company.name} style={{ maxWidth: 200, maxHeight: 50 }} />
      )}
      <div>
        <p>{company.name}</p>
        <p>{company.addressLine1}</p>
        <p>{company.addressLine2}</p>
        <p>{company.phone}</p>
        <p>{company.mail}</p>
      </div>
    </div>
  );
};

export default CompanyInfo;
