import './App.css'
import Footer from './components/Footer/Footer';

const App = () => {
  const footerData = {
    company: {
      addressLine1: "Brzozowa 23",
      addressLine2: "Katowice 40-000",
      phone: "+48123456977",
      mail: "mail@example.com",
      name: "ABGF Sp. z o. o.",
      logo: "link-to-image"
    },
    socials: {
      fb: "facebook.com",
      instagram: "instagram.com",
      twitter: "twitter.com"
    },
    links: {
      help: "/help",
      pay: "/pay",
      agreement: '/agreement',
      dashboard: '/dashboard',
      reading: '/reading',
      reports: '/reports',
    }
  };

  return (
    <div>
      <Footer footer={footerData} />
    </div>
  );
};

export default App
