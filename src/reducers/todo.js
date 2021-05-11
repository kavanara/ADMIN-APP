export const getSectionById = (state, sectionId) => {
    return state.sections[sectionId] || {}
  }