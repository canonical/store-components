import React, { useState } from "react";

import Filters from "../Filters";

// Sample data
import categories from "./sample-data/categories";
import packages from "./sample-data/packages";

function MainPage() {
  const [filteredPackages, setFilteredPackages] = useState(packages);

  return (
    <>
      <h1>Store front page</h1>
      <h2>
        Selected packages: ({filteredPackages.length} of {packages.length})
      </h2>
      <ul>
        {filteredPackages &&
          filteredPackages.map((item) => (
            <li key={item.package.name}>
              Name: {item.package.display_name}
              <br />
              Type: {item.package.type}
              <br />
              Platform:{" "}
              {item.package.platforms ? item.package.platforms[0] : "none"}
              <br />
              Categories:{" "}
              {item.categories &&
                item.categories.map((category) => (
                  <span key={category.name}>{category.display_name}, </span>
                ))}
              <hr />
            </li>
          ))}
      </ul>
      <Filters
        categories={categories}
        packages={packages}
        setFilteredPackages={setFilteredPackages}
        types={[
          { label: "All", value: "all" },
          { label: "Charms", value: "charm" },
          { label: "Bundles", value: "bundle" },
        ]}
        platforms={[
          { label: "All", value: "all" },
          { label: "VM", value: "vm" },
          { label: "Kubernetes", value: "kubernetes" },
        ]}
      />
    </>
  );
}

export default MainPage;
