const formatDate = (date) => {
    return new Intl.DateTimeFormat("en-uk", { day: "numeric", month: "long", year: "numeric" }).format(new Date(date));
};

export default formatDate;