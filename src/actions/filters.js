export const filterText = (text = '') => ({
    type: 'FILTER_TEXT',
    text
});

export const startYear = (startYear) => ({
    type: 'START_YEAR',
    startYear
});

export const endYear = (endYear) => ({
    type: 'END_YEAR',
    endYear
});

export const sortBy = (sortType) => ({
    type: 'SORT_BY',
    sortType
});

const filtersReducerDefaultState = {
    text: '',
    sortBy: '',
    startYear: undefined,
    endYear: undefined
};

export const clear = () => ({
    type: 'CLEAR',
    defaultFilter: filtersReducerDefaultState
});