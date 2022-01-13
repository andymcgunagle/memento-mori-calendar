export class Durations {
  daysLived: string;
  weeksLived: string;
  yearsLived: string;
  all: string[];

  constructor(weeksLived: number) {
    this.daysLived = `${weeksLived * 7} days lived`;
    this.weeksLived = `${weeksLived.toFixed(1)} weeks lived`;
    this.yearsLived = `${(weeksLived / 52).toFixed(1)} years lived`;
    this.all = [this.daysLived, this.weeksLived, this.yearsLived];
  };
};