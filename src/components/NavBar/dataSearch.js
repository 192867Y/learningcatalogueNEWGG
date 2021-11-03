export function getStocks() {
    return [
      { abbr: 'A0001', name: 'MyCare: Designing Human-Centered Care Toolkit' },
      { abbr: 'A0002', name: 'MyCare: Effective Job Training with Job Instruction (JI)' },
      { abbr: 'A0003', name: 'MyCare: The Ant of Standardized Work (SW) for Consistency' },
      { abbr: 'A0004', name: 'MyCare: Introduction to Design Thinking' },
      { abbr: 'A0005', name: 'MyCare: Start and Sustain the Environment' },
      { abbr: 'A0006', name: 'Identifying Waste and Polution in the City' }
    ];
  }
  
  export function matchStocks(state, value) {
    return (
      state.name.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
      state.abbr.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
  }