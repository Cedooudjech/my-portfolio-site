/**
 * Responsive component
 *
 * This component uses the `useMediaQuery` hook from the `react-responsive` library
 * to determine if the viewport width is less than or equal to 430 pixels.
 */

import { useMediaQuery } from "react-responsive"; // Import the useMediaQuery hook

function Responsive() {
  const isMobile = useMediaQuery({ query: "(max-width: 430px)" });
  return isMobile;
}

export default Responsive;
