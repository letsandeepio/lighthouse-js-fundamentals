for (let i = 100; i <= 200; i++) {
  output = '';
  if (i % 3 == 0) output += 'Loopy';
  if (i % 4 == 0) output += 'Lighthouse';
  console.log(!output ? i : output);
}
