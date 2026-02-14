import "./getQuote.css";
import patternBg from "../../assets/images/Rectangle-19.webp"; // ✅ same pattern you used before

export default function GetQuote() {
  return (
    <section
      className="getQuote"
      style={{ "--quote-bg": `url(${patternBg})` }}
    >
      <button className="btn-fill btn-fill--solid getQuote__btn">
        <span>Get Quote</span>
      </button>
    </section>
  );
}
