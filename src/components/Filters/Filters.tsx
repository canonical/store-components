import React, { SyntheticEvent } from "react";
import { CheckboxInput, Select } from "@canonical/react-components";

import type { Category } from "../../types/category";

type Props = {
  categories: Array<Category>;
  selectedCategories: Array<string>;
  setSelectedCategories: Function;
  platforms?: Array<{ display_name: string; name: string }>;
  selectedPlatform?: string | undefined;
  setSelectedPlatform?: Function;
  packageTypes?: Array<{ display_name: string; name: string }>;
  selectedPackageType?: string | undefined;
  setSelectedPackageType?: Function;
  disabled: boolean;
  showFeatured?: boolean;
};

function Filters({
  categories,
  selectedCategories,
  setSelectedCategories,
  platforms,
  selectedPlatform,
  setSelectedPlatform,
  packageTypes,
  selectedPackageType,
  setSelectedPackageType,
  disabled,
  showFeatured,
}: Props) {
  const handleSelectedCategoriesChange = (
    event: SyntheticEvent,
    categoryName: string
  ) => {
    const target = event.target as HTMLInputElement;

    let newSelectedCategories = [...selectedCategories];

    if (target.checked) {
      newSelectedCategories = [...selectedCategories, categoryName];
    } else {
      newSelectedCategories.splice(
        newSelectedCategories.indexOf(categoryName),
        1
      );
    }

    setSelectedCategories(newSelectedCategories.sort());
  };

  return (
    <>
      <h2 className="p-muted-heading">Filters</h2>
      {showFeatured && (
        <strong>
          <CheckboxInput
            disabled={disabled}
            key="featured"
            label="Featured"
            labelClassName="u-no-margin--bottom"
            onChange={(event: SyntheticEvent) => {
              handleSelectedCategoriesChange(event, "featured");
            }}
            checked={selectedCategories?.includes("featured")}
          />
        </strong>
      )}
      {categories.length > 0 &&
        categories.map((category) => (
          <CheckboxInput
            disabled={disabled}
            key={category.name}
            label={category.display_name}
            onChange={(event: SyntheticEvent) => {
              handleSelectedCategoriesChange(event, category.name);
            }}
            checked={selectedCategories?.includes(category.name)}
          />
        ))}

      {platforms && (
        <Select
          disabled={disabled}
          defaultValue={selectedPlatform}
          id="platforms"
          label="Platforms"
          options={platforms.map((platform) => {
            return {
              label: platform.display_name,
              value: platform.name,
            };
          })}
          onChange={(e) => {
            setSelectedPlatform(e.target.value);
          }}
        />
      )}

      {packageTypes && (
        <Select
          disabled={disabled}
          defaultValue={selectedPackageType}
          id="package-types"
          label="Filter by"
          options={packageTypes.map((packageType) => {
            return {
              label: packageType.display_name,
              value: packageType.name,
            };
          })}
          onChange={(e) => {
            setSelectedPackageType(e.target.value);
          }}
        />
      )}
    </>
  );
}

export default Filters;
