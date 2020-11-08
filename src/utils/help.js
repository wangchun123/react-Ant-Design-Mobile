//处理条形图的y轴数据，2个为一行。处理展示数据太长。
export const dealData = (str) => {
  if (!str || typeof str !== "string") return str;
  const newArry = str.split("");
  let data = "";

  newArry.forEach((item, index) => {
    if (index > 0 && index !== newArry.length - 1 && (index + 1) % 4 === 0) {
      data += `${item}\n`;
    } else {
      data += `${item}`;
    }
  });
  return data;
};
