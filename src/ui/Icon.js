import 'material-icons/iconfont/material-icons.css';

function Icon({ iconName, color, size, align }) {
  return (
    <i
      className={`material-icons reminder-icon ${color}-text ${size} ${align}`}
    >
      {iconName}
    </i>
  );
}

export default Icon;
