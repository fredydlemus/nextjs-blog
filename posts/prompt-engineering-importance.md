---
title: "La importancia del Prompt Engineering en los Large Language Models"
date: "2023-07-11"
description: "Los Large Language Models son un fenómeno actual en el ámbito tecnológico. Estos modelos de inteligencia artificial, como el innovador GPT-3 de OpenAI, son entrenados para predecir la secuencia de palabras más adecuada basándose en un prompt."
tag: "Generative IA"
---

Los "Large Language Models" son un fenómeno actual en el ámbito tecnológico. Estos modelos de inteligencia artificial, como el innovador GPT-3 de OpenAI, son entrenados para predecir la secuencia de palabras más adecuada basándose en un "prompt".

Pero, ¿qué es un "prompt"? En términos simples, es el input que se da al modelo para que este genere texto. Puede ser una sola palabra o varias oraciones, que sirven como punto de partida para la generación de contenido por parte de la IA. Este input **orienta y modela la respuesta que brinda el modelo.**

En un primer acercamiento, un "prompt" puede entenderse como una secuencia de palabras que establece una tarea, por ejemplo: "Resume lo siguiente". Pero en la mecánica subyacente del modelo, esta secuencia textual se transforma en una representación numérica, en forma de vectores, conocidos como "task embeddings" (o incrustaciones de tareas).

Estas "task embeddings" son fundamentales para el funcionamiento del modelo, ya que representan la instrucción inicial en un formato que el sistema puede procesar y entender. Los vectores resultantes tienen la capacidad de **orientar la operación del modelo**, permitiéndole **ajustar su enfoque** en función del tipo de tarea que se le ha asignado, ya sea resumir un texto, traducir una frase, generar un poema, y así sucesivamente.

Además, es importante resaltar que estos vectores no sólo contienen información sobre la secuencia de palabras, sino también sobre las **relaciones estadísticas entre ellas**s. Los modelos de lenguaje como GPT-3 son capaces de entender estas relaciones y utilizarlas para generar respuestas. Por ejemplo, si las palabras "perro" y "ladrido" aparecen frecuentemente juntas en los datos de entrenamiento, el modelo aprenderá a asociarlas y utilizará esta información para generar respuestas relevantes.

Estas relaciones estadísticas entre palabras contienen mucha **información semántica**, lo que significa que pueden ayudar al modelo a entender el significado de las palabras en un contexto particular. Esta capacidad de capturar y procesar información semántica es una de las razones por las que los modelos de lenguaje de gran escala pueden generar respuestas tan relevantes y coherentes a partir de los prompts.

Veamos como diferentes tecnicas de prompt pueden cambiar la salida que obtenemos:
