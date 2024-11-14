// import { Controller, useFormContext } from "react-hook-form";
// import { View } from "react-native";
// import SelectDropdown from "react-native-select-dropdown";

// type SelectProps = {
//   id: string;
// };

// export const Select = ({ id }: SelectProps) => {
//   const { control } = useFormContext();


//   return (
//     <Controller
//       control={control}
//       name={id}
//       render={({ field }) => (
//         <SelectDropdown
//           ref={field.ref}
//           data={["1", '2', '3']}
//           onSelect={(selectedItem: Item | undefined) =>
//             field.onChange(selectedItem?.value)
//           }
//           renderButton={renderButton}
//           renderItem={renderItem}
//           disabledIndexes={disabledOptions}
//           dropdownStyle={{
//             padding: 2,
//             backgroundColor: "#E9ECEF",
//             borderRadius: 8,
//           }}
//         />
//       )}
//     />
//   );
// };
