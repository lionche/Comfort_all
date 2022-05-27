from workline.model.step3_generationText import generate

generated_sequences = generate()

for sequence in generated_sequences:
    print(sequence)

