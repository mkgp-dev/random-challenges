/*
(November 06, 2025) When Should You Go to Sleep?
You’re setting an alarm for the next morning and know how long you want to sleep.
Your job is to figure out what time you need to go to bed to get that amount of sleep.
Each input has two parts:
- The alarm time (when you’ll wake up).
- The sleep duration (how long you want to sleep).

Return the time you should go to bed — in 24-hour format ("HH:MM").

Test cases:
bedTime(["07:50", "07:50"])
=> ["00:00"]
bedTime(["06:15", "10:00"], ["08:00", "10:00"], ["09:30", "10:00"])
=> ["20:15", "22:00", "23:30"]
bedTime(["05:45", "04:00"], ["07:10", "04:30"])
=> ["01:45", "02:40"]
*/

const minutes = (time) => {
  const [h, m] = time.split(':').map(Number);
  return (h * 60) + m;
};

const bedTime = (...array) => {
  return array.map(([alarm, sleep]) => {
    const _alarm = minutes(alarm);
    const _sleep = minutes(sleep);

    let total = _alarm - _sleep;
    if (total < 0) total += 24 * 60;

    const hm = [String(Math.floor(total / 60)).padStart(2, '0'), String(total % 60).padStart(2, '0')];
    return hm.join(':');
  });
};
