// Translated from TypeScript:
// https://chatgpt.com/c/691394c5-0eb0-8328-82d4-25ea0734ff27
fn parse(contents: &str) -> Vec<(i32, i32)> {
    contents
        .lines() // splits by '\n'
        .filter_map(|line| {
            // skip empty lines
            if line.len() < 13 {
                return None;
            }
            let first = line.get(0..5)?.trim().parse::<i32>().ok()?;
            let second = line.get(8..13)?.trim().parse::<i32>().ok()?;
            Some((first, second))
        })
        .collect()
}
