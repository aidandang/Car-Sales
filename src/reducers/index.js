import { 
  ADD_FEATURE,
  REMOVE_FEATURE
} from '../actions'

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  additionalFeatures: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FEATURE:
      if (state.car.features.filter(feature => feature.id === action.item.id).length > 0) {
        return state
      } else {
        return {
          ...state,
          additionalPrice: state.additionalPrice + action.item.price,
          car: { 
            features: [...state.car.features, action.item], 
            price: state.car.price, 
            name: state.car.name, 
            image: state.car.image 
          },
          additionalFeatures: [...state.additionalFeatures]
        }
      }
    case REMOVE_FEATURE:
      return {
        ...state,
        additionalPrice: state.additionalPrice - action.item.price,
        car: { 
          features: state.car.features.filter(feature => feature.id !== action.item.id), 
          price: state.car.price, 
          name: state.car.name, 
          image: state.car.image 
        },
        additionalFeatures: [...state.additionalFeatures]
      }
    default:
      return state
  };
};

export default rootReducer;