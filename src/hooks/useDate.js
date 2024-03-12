export const useDate = (dateRaw) =>
{
    const date = new Date(dateRaw);
    const dateNow = new Date();

    const getYearDistance = () =>
    {
        var year1 = date.getFullYear();
        var year2 = dateNow.getFullYear();

        return Math.abs(year2 - year1);
    }

    const getMonthDistance = () =>
    {
        var month1 = date.getMonth();
        var month2 = dateNow.getMonth();

        return Math.abs(month2 - month1);
    }

    const getDayDistance = () =>
    {
        var day1 = date.getDate();
        var day2 = dateNow.getDate();

        return Math.abs(day2 - day1);
    }

    const yearDistance = getYearDistance();
    const monthDistance = getMonthDistance();
    const dayDistance = getDayDistance();

    var distance;

    if(yearDistance>0) distance = `${yearDistance} years ago`;
    else if(monthDistance>0) distance = `${monthDistance} month ago`;
    else distance = `${dayDistance} days ago`;

    return(
        {
            yearDistance,
            monthDistance,
            dayDistance,
            distance
        }
    );
}