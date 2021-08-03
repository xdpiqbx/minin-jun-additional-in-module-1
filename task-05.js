const NEXT_YEAR = new Date().getFullYear() + 1;
const defaultEventDate = `01.01.${NEXT_YEAR}`;
const defaultEventTitle = `Happy New ${NEXT_YEAR} Year`;

let eventDate =
  prompt(`Укажите дату в формате [dd.mm.yyyy]`)?.trim() ?? defaultEventDate;
let eventTitle = prompt(`Укажите событие`)?.trim() ?? defaultEventTitle;

if (!eventDate) {
  eventDate = defaultEventDate;
}

const timerPaceholder = document.querySelector(".timer");

const getTimeZoneOffsetInHours = () => {
  const timezoneOffsetMinutes = new Date().getTimezoneOffset();
  return timezoneOffsetMinutes / 60;
};

const normalizeNumber = (number) => {
  return number < 10 ? `0${number}` : `${number}`;
};

const timeCalculation = (date) => {
  const [day, month, year] = date.split(".");

  const dateObj = new Date(
    parseInt(year),
    parseInt(month) - 1,
    parseInt(day),
    getTimeZoneOffsetInHours()
  );

  const diff = dateObj.getTime() - new Date();
  const diffDateObj = new Date(diff);

  return {
    days: normalizeNumber(parseInt(diff / 1000 / 60 / 60 / 24)),
    hours: normalizeNumber(diffDateObj.getHours()),
    minutes: normalizeNumber(diffDateObj.getMinutes()),
    seconds: normalizeNumber(diffDateObj.getSeconds()),
  };

  /*
    не забываем о том что в Октябре на час назад
    а в Марте на час вперёд
  */
};

const announcementTemplate = (event = "", date) => {
  const { days, hours, minutes, seconds } = date;
  return `
    <p>До события ${event} осталось:</p>
    <p>Дней: ${days}, часов: ${hours}, минут: ${minutes}, секунд: ${seconds}</p>
  `;
};

const addAnnounsToDOM = () => {
  timerPaceholder.innerHTML = announcementTemplate(
    eventTitle,
    timeCalculation(eventDate)
  );
};

setInterval(() => {
  addAnnounsToDOM();
}, 1000);
