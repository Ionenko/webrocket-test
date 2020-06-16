const rebuildInventoriesToLocations = (inventories) => {
  const rebuildData = inventories.map((item) => {
    const filtered = inventories.filter(inv => inv.warehouse.locationArea
      === item.warehouse.locationArea);

    return JSON.stringify(filtered);
  });

  const t = [...new Set(rebuildData)];
  const rebuildT = t.map(item => JSON.parse(item));
  const finalData = rebuildT.map(item => ({
    name: item[0].warehouse.locationArea,
    value: item.reduce((acc, value) => acc + value.available, 0),
  }), {});

  return finalData;
};

const rebuildPriceRangeForChart = (priceRange, withRoi) => {
  const labels = priceRange.map((item) => {
    if (item.from === item.to) {
      return `${item.from}`;
    }
    if (item.to === null) {
      return `>${item.from}`;
    }

    return `${item.from}-${item.to}`;
  });
  const prices = priceRange.map(item => item.price);
  const roi = withRoi ? priceRange.map(item => Number(item.roi.toFixed(1))) : [];

  return {
    labels,
    prices,
    roi,
  };
};

const rebuildInventoriesToPrices = inv => inv.reduce((acc, item) => [
  ...acc,
  ...item.priceRange,
], []);

const rebuildObjectNameToString = (name) => {
  const nameWithUpFirstLetter = name.charAt(0).toUpperCase() + name.slice(1);
  const rebuildedArr = nameWithUpFirstLetter.match(/[A-Z][a-z]+/g);
  const finalArr = rebuildedArr.join(' ');

  return finalArr;
};

const rebuildAdditionalInfoCart = (item) => {
  const objectToArray = Object.entries(item);
  const filtereToAdditional = objectToArray.filter(name => name[0] === 'freightCharges'
  || name[0] === 'freightType'
  || name[0] === 'estimatedDeliveryTime');
  const replaceNull = filtereToAdditional.filter(filtered => filtered[1]);

  return replaceNull.map(replaced => ({
    label: rebuildObjectNameToString(replaced[0]),
    value: replaced[0] === 'freightCharges' ? `$${replaced[1]}` : replaced[1],
  }));
};

const groupBy = ({ Group: array, By: props }) => {
  const getGroupedItems = (item) => {
    const returnArray = [];
    for (let i = 0; i < props.length; i++) {
      returnArray.push(item[props[i]]);
    }

    return returnArray;
  };

  const groups = {};

  for (let i = 0; i < array.length; i++) {
    const arrayRecord = array[i];
    const group = JSON.stringify(getGroupedItems(arrayRecord));
    groups[group] = groups[group] || [];
    groups[group].push(arrayRecord);
  }

  return Object.keys(groups).map((key) => {
    const obj = {};
    obj.items = groups[key];

    const values = JSON.parse(key);

    values.forEach((item, index) => {
      obj[props[index]] = values[index];
    });

    return obj;
  });
};

const rebuildFreightInformation = (collection) => {
  const groupByProperties = ['locationArea', 'freightType'];

  return groupBy({Group: collection, By: groupByProperties});
};

const testIsUpperLetter = letter => letter === letter.toUpperCase();

export {
  rebuildInventoriesToLocations,
  rebuildPriceRangeForChart,
  rebuildInventoriesToPrices,
  rebuildObjectNameToString,
  rebuildAdditionalInfoCart,
  rebuildFreightInformation,
  testIsUpperLetter,
};
