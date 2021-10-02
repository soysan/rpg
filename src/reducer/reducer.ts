import { Data, ActionType, ClassVal, TraitVal } from '../types/types';

export const Reducer = (state: Data, action: ActionType): Data => {
  ResetStatus(state);
  ChangeStatus(state, action.value);
  switch (action.type) {
    case "name":
      return {
        ...state,
        name: state.name = action.value,
      };
      case "class":
      return {
        ...state,
        className: state.className = action.value as ClassVal,
      };
    case "gender":
      return {
        ...state,
        gender: state.gender = action.value as 'male' | 'female',
      };
    case 'trait':
      return {
        ...state,
        trait: state.trait = action.value as TraitVal,
      };
    case 'strength':
      return {
        ...state,
        strength: state.strength,
      };
    case 'agility':
      return {
        ...state,
        agility: state.agility,
      };
    case 'resilience':
      return {
        ...state,
        resilience: state.resilience,
      };
    case 'wisdom':
      return {
        ...state,
        wisdom: state.wisdom,
      };
    case 'luck':
      return {
        ...state,
        luck: state.luck,
      };
    default:
      return state;
  }
};

const ChangeStatus = (state: Data, value: string | number) => {
  if(value === 'bat out of hell') return {
    ...state,
    agility: state.agility += state.agility * 0.4,
  }
  if(value === 'brave') return {
    ...state,
    strength: state.strength += state.strength * 0.1,
    agility: state.agility += state.agility * 0.1,
    luck: state.luck += state.luck * 0.2,
  }
  if(state.gender === 'male' && value === 'lucky devil') return {
    ...state,
    luck: state.luck += state.luck * 0.5,
  }
  if(state.gender === 'female' && value === 'tomboy') return {
    ...state,
    strength: state.strength += state.strength * 0.1,
    agility: state.agility += state.agility * 0.1,
  }
  return;
}

const ResetStatus = (state: Data) => {
  return {
    ...state,
    agility: state.agility = 10,
    strength: state.strength = 10,
    resilience: state.resilience = 10,
    wisdom: state.wisdom = 10,
    luck: state.luck = 10,
  }
}
