import './Main.css';

const NavStrip = () => {
  return (
    <div className="blue-strip">
      <div className="icon-box">
        <div className="icon-container">
          <img src="./dc.png" alt="Digital Comics" />
        </div>
        <span>DIGITAL COMICS</span>
      </div>
      
      <div className="icon-box">
        <div className="icon-container">
          <img src="./buy-comics-merchandise.png" alt="Merchandise" />
        </div>
        <span>DC MERCHANDISE</span>
      </div>
      
      <div className="icon-box">
        <div className="icon-container">
          <img src="./buy-comics-subscriptions.png" alt="Subscription" />
        </div>
        <span>SUBSCRIPTION</span>
      </div>
      
      <div className="icon-box">
        <div className="icon-container">
          <img src="./buy-comics-shop-locator.png" alt="Shop Locator" />
        </div>
        <span>COMIC SHOP LOCATOR</span>
      </div>
      
      <div className="icon-box">
        <div className="icon-container">
          <img src="./buy-dc-power-visa.svg" alt="DC Power Visa" />
        </div>
        <span>DC POWER VISA</span>
      </div>
    </div>
  );
};

export default NavStrip;