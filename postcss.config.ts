import * as autoprefixer from "autoprefixer";
import * as nested from "postcss-nested";
import * as pxtorem from "postcss-pxtorem";

export default {
  plugins: [autoprefixer, nested, pxtorem],
};
