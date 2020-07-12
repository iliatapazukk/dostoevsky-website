import React from "react";
import ClausePageCatalogue from "./ClausePageCatalogue";
import ukRf from "content/ук-рф.json";
import { action } from "@storybook/addon-actions";

export default {
  title: "components/ClausePageCatalogue",
  component: ClausePageCatalogue,
};

const defaultProps = {
  year: 2019,
  onClose: action("onClose"),
  onPartClick: action("onPartClick"),
  onSectionClick: action("onSectionClick"),
};

export const withoutActive = (): React.ReactNode => (
  <ClausePageCatalogue parts={ukRf} {...defaultProps} />
);

export const withActivePart = (): React.ReactNode => (
  <ClausePageCatalogue
    parts={ukRf}
    sections={ukRf[0].children}
    activePartKey={ukRf[0].key}
    {...defaultProps}
  />
);

export const withActiveSection = (): React.ReactNode => (
  <ClausePageCatalogue
    parts={ukRf}
    sections={ukRf[0].children}
    clauses={ukRf[0].children[0].children}
    activePartKey={ukRf[0].key}
    activeSectionKey={ukRf[0].children[0].key}
    {...defaultProps}
  />
);

export const withActiveClause = (): React.ReactNode => (
  <ClausePageCatalogue
    parts={ukRf}
    sections={ukRf[0].children}
    clauses={ukRf[0].children[0].children}
    activePartKey={ukRf[0].key}
    activeSectionKey={ukRf[0].children[0].key}
    activeClauseKey={ukRf[0].children[0].children[0].key}
    {...defaultProps}
  />
);
