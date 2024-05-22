import React, { useState, SyntheticEvent } from "react";
import {
  CheckboxInput,
  Select,
  Button,
  Icon,
} from "@canonical/react-components";

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
  architectures?: Array<{ display_name: string; name: string }>;
  selectedArchitecture?: string | undefined;
  setSelectedArchitecture?: Function;
  disabled: boolean;
  showFeatured?: boolean;
  order?: Array<string>;
  showMore?: boolean;
  showMoreCount?: number;
  displayAllCategories?: boolean;
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
  architectures,
  selectedArchitecture,
  setSelectedArchitecture,
  disabled,
  showFeatured,
  order,
  showMore,
  showMoreCount,
  displayAllCategories,
}: Props) {
  const [showAllCategories, setShowAllCategories] = useState(
    displayAllCategories || false
  );
  const categoryCount = showMoreCount ? showMoreCount - 1 : 9;

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

  let sortedCategories = [];

  if (order && order.length > 0) {
    order.forEach((item) => {
      const category = categories.find((cat) => cat.name === item);
      if (category) {
        sortedCategories.push(category);
      }
    });

    categories.forEach((cat) => {
      if (!order.includes(cat.name)) {
        sortedCategories.push(cat);
      }
    });
  } else {
    sortedCategories = categories;
  }

  return (
    <>
      <h2 className="p-muted-heading">Categories</h2>
      {showFeatured && (
        <CheckboxInput
          disabled={disabled}
          key="featured"
          label="Featured"
          onChange={(event: SyntheticEvent) => {
            handleSelectedCategoriesChange(event, "featured");
          }}
          checked={selectedCategories?.includes("featured")}
        />
      )}
      {sortedCategories.length > 0 &&
        sortedCategories.map((category, index) => (
          <CheckboxInput
            disabled={disabled}
            key={category.name}
            label={category.display_name}
            labelClassName={
              showMore && !showAllCategories && index > categoryCount
                ? "u-hide"
                : ""
            }
            onChange={(event: SyntheticEvent) => {
              handleSelectedCategoriesChange(event, category.name);
            }}
            checked={selectedCategories?.includes(category.name)}
          />
        ))}

      {showMore &&
        sortedCategories &&
        sortedCategories.length > categoryCount &&
        !showAllCategories && (
          <Button
            className="has-icon p-button--link"
            onClick={() => {
              setShowAllCategories(true);
            }}
          >
            <span>Show more</span>
            <Icon name="chevron-down"></Icon>
          </Button>
        )}

      {showMore && showAllCategories && (
        <Button
          className="has-icon p-button--link"
          onClick={() => {
            setShowAllCategories(false);
          }}
        >
          <span>Show less</span>
          <Icon name="chevron-up"></Icon>
        </Button>
      )}

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

      {architectures && (
        <Select
          disabled={disabled}
          defaultValue={selectedArchitecture}
          id="package-types"
          label="Architecture"
          options={architectures.map((architecture) => {
            return {
              label: architecture.display_name,
              value: architecture.name,
            };
          })}
          onChange={(e) => {
            setSelectedArchitecture(e.target.value);
          }}
        />
      )}
    </>
  );
}

export default Filters;
