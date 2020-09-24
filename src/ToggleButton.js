// import React, { useState } from "react";
// import { ThemeConsumer } from "styled-components";
// import Button from "./Button";
// import Switch from "@material-ui/core/Switch";

// export default function Switches() {
//   const [checked, setChecked] = React.useState(false);

//   const toggleChecked = () => {
//     setChecked((prev) => !prev);
//   };

//   return (
//     <ThemeConsumer>
//       {(theme) => (
//         <Switch
//           checked={checked}
//           onChange={toggleChecked}
//           onClick={(e) =>
//             theme.setTheme(
//               theme.mode === "dark"
//                 ? { ...theme, mode: "light", paper: "light" }
//                 : { ...theme, mode: "dark", paper: "dark" }
//             )
//           }
//         />
//       )}
//     </ThemeConsumer>
//   );
// }

// export default function ToggleMode() {
//   return (
//     <ThemeConsumer>
//       {(theme) => (
//         <Button
//           variant="primary"
//           onClick={(e) =>
//             theme.setTheme(
//               theme.mode === "dark"
//                 ? { ...theme, mode: "light", paper: "light" }
//                 : { ...theme, mode: "dark", paper: "dark" }
//             )
//           }
//         >
//           Toggle Mode
//         </Button>
//       )}
//     </ThemeConsumer>
//   );
// }

import React, { useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { ThemeConsumer } from "styled-components";

export default () => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  return (
    <ThemeConsumer>
      {(theme) => (
        <DarkModeToggle
          onChange={setIsDarkMode}
          checked={isDarkMode}
          size={80}
          onClick={(e) =>
            theme.setTheme(
              theme.mode === "dark"
                ? { ...theme, mode: "light", paper: "light" }
                : { ...theme, mode: "dark", paper: "dark" }
            )
          }
        />
      )}
    </ThemeConsumer>
  );
};
