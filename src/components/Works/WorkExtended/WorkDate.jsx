import { useDate } from "../../../hooks/useDate.js";

const WorkDate = ({time}) =>
{
    const { date, duration } = time;
    const { distance } = useDate(date);
    
    const durationProccesed = duration === "current"?duration:`${duration} of duration`;

    return (
        <p className="work-extended-date">{`${distance} - ${durationProccesed}`}</p>
    );
}

export default WorkDate;

