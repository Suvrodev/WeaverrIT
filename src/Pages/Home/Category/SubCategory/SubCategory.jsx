import React, { useEffect, useState } from "react";
import SubCategoryCard from "./SubCategoryCard";

const SubCategory = ({ id }) => {
  // console.log("Comming ID: ",id);

  const [subCategory, setSubCategory] = useState([]);
  useEffect(() => {
    fetch("subCategory.json")
      .then((res) => res.json())
      .then((data) => {
        const x = data.filter((d) => d.categoryid == id);
        // setSubCategory(data.categoryid)
        setSubCategory(x);
      });
  }, [id]);

  // const [targetSubCategory,setTargetSubcategory]=useState([]);

  // const targetSubCategory_help_=subCategory.filter(target=>target.categoryid===id)
  // setTargetSubcategory(targetSubCategory_help_)

  // {
  //     useEffect(()=>{
  //         const targetSubCategory_help=subCategory.filter(target=>target.categoryid===id)
  //         setTargetSubcategory(targetSubCategory_help)
  //         console.log("In useEffect");
  //      },[id])
  // }

  // console.log("Target subCatgory: ");
  // console.log(targetSubCategory);
  return (
    <div>
      {/* Sub Category {targetSubCategory.length} */}
      {subCategory.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {subCategory.map((subCategory, idx) => (
            <SubCategoryCard
              subCategory={subCategory}
              key={idx}
            ></SubCategoryCard>
          ))}
        </div>
      ) : (
        <div>
          <h1>No Update right now</h1>
        </div>
      )}
    </div>
  );
};

export default SubCategory;
