import "./App.css";

const CreditCardPayment = ({ amount }) => {
  return amount > 1000 ? (
    <p>Please use your credit card for payment.</p>
  ) : (
    <p>You can pay using cash or debit card.</p>
  );
};

const ProductAvailability = ({ inStock }) => {
  return inStock ? (
    <p>The product is available. Order now!</p>
  ) : (
    <p>Sorry, the product is currently out of stock.</p>
  );
};

const TrafficLight = ({ color }) => {
  return color === "Red" ? (
    <p>Stop! The light is red.</p>
  ) : (
    <p>Go! The light is green.</p>
  );
};

const MembershipStatus = ({ isPremium }) => {
  return isPremium ? (
    <p>Welcome, Premium Member!</p>
  ) : (
    <p>Upgrade to premium for exclusive benefits.</p>
  );
};

const WeatherReport = ({ isSunny }) => {
  return isSunny ? <p>It is sunny today.</p> : <p>It is sunny today.</p>;
};

export default function App() {
  return (
    <main>
      <CreditCardPayment amount={1200} />
      <ProductAvailability inStock={true} />
      <TrafficLight color="red" />
      <MembershipStatus isPremium={true} />
      <WeatherReport isSunny={true} />
    </main>
  );
}
