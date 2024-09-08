import css from "./Options.module.css";

const Options = ({ onFeedback, totalFeedback }) => {
  return (
    <div className={css.options}>
      {/* <div>
      <ul>
        <li>good: {votingData.windows}</li>
        <li>neutral: {votingData.macos}</li>
        <li>bad: {votingData.linux}</li>
      </ul>
      </div> */}
      <div>
        <button className={css.button} onClick={() => onFeedback('good')}>Good</button>
        <button className={css.button} onClick={() => onFeedback('neutral')}>Neutral</button>
        <button className={css.button} onClick={() => onFeedback('bad')}>Bad</button>
        <button onClick={() => onFeedback('reset')} className={totalFeedback > 0 ? css.button_visible : css.button_reset}>Reset</button>
         </div>
      </div>
      );
};

export default Options;