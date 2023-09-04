export interface ChangeName {
    name: string,
    age: number
}

export interface IncrementedAgeAction {
    type: 'increment_age';
  }
  
export interface ChangedNameAction {
    type: 'change_name';
    nextName: string;
}


