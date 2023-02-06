import React, { useState, useEffect } from "react";
import { CheckboxInput, Select } from "@canonical/react-components";

import type { Package } from "types/package";

type Props = {
  categories?: Array<{ display_name: string; name: string }> | null;
  packages: Array<Package>;
  setFilteredPackages: Function;
  types?: Array<{
    label: string;
    value?: string;
  }> | null;
  platforms?: Array<{
    label: string;
    value: string;
  }> | null;
};

function Filters({
  categories,
  types,
  packages,
  setFilteredPackages,
  platforms,
}: Props) {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPlatform, setSelectedPlatform] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  const hasPlatform = (item: Package, platform: string) => {
    if (!platform || platform === "all") {
      return true;
    }

    return item.package.platforms && item.package.platforms.includes(platform);
  };

  const isType = (item: Package, type: string) => {
    if (!type || type === "all") {
      return true;
    }

    return item.package.type === type;
  };

  const hasCategories = (item: Package, categoryList: Array<string>) => {
    const itemCategories = item.categories.map((itemCategory) => {
      return itemCategory.name;
    });

    let hasCategory = true;

    categoryList.forEach((categoryItem) => {
      if (!itemCategories.includes(categoryItem)) {
        hasCategory = false;
      }
    });

    return hasCategory;
  };

  useEffect(() => {
    setFilteredPackages(
      packages.filter(
        (item) =>
          hasPlatform(item, selectedPlatform) &&
          isType(item, selectedType) &&
          hasCategories(item, selectedCategories)
      )
    );
  }, [
    selectedCategories,
    selectedPlatform,
    selectedType,
    packages,
    setFilteredPackages,
  ]);

  return (
    <>
      <h3 className="p-muted-heading">Filters</h3>
      {categories &&
        categories.map((category) => (
          <CheckboxInput
            key={category?.name}
            label={category?.display_name}
            onChange={(e) => {
              const target = e.target as HTMLInputElement;

              if (
                !selectedCategories.includes(category.name) &&
                target.checked
              ) {
                setSelectedCategories(
                  [category.name].concat(selectedCategories)
                );
              }

              if (
                selectedCategories.includes(category.name) &&
                !target.checked
              ) {
                setSelectedCategories(
                  selectedCategories.filter(
                    (selectedCategory) => selectedCategory !== category.name
                  )
                );
              }
            }}
          />
        ))}

      {platforms && (
        <Select
          defaultValue="all"
          id="platforms"
          label="Platforms"
          options={platforms}
          onChange={(e) => {
            setSelectedPlatform(e.target.value);
          }}
        />
      )}

      {types && (
        <Select
          defaultValue="all"
          id="types"
          label="Types"
          options={types}
          onChange={(e) => {
            setSelectedType(e.target.value);
          }}
        />
      )}
    </>
  );
}

export default Filters;
