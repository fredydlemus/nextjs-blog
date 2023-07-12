---
title: "La importancia del Prompt Engineering en los Large Language Models"
date: "2023-07-11"
description: "¿Te has preguntado alguna vez cómo una sencilla pregunta o indicación puede determinar la calidad de la respuesta que obtienes de un modelo de lenguaje? ¿Cómo una pequeña modificación en tu consulta puede cambiar completamente los resultados? Te invito a explorar el fascinante mundo del Prompt Engineering"
image: "/images/posts/prompt-engineering-importance/deep-learning.svg"
shareImage: "/images/posts/prompt-engineering-importance/chatgpt-wallpaper.jpg"
tag: "Generative IA"
---

Los "Large Language Models" son un fenómeno actual en el ámbito tecnológico. Estos modelos de inteligencia artificial, como el innovador GPT-3 de OpenAI, son entrenados para predecir la secuencia de palabras más adecuada basándose en un "prompt".

## Que es un prompt?

Pero, ¿qué es un "prompt"? En términos simples, es el input que se da al modelo para que este genere texto. Puede ser una sola palabra o varias oraciones, que sirven como punto de partida para la generación de contenido por parte de la IA. Este input **orienta y modela la respuesta que brinda el modelo.**

En un primer acercamiento, un "prompt" puede entenderse como una secuencia de palabras que establece una tarea, por ejemplo: "Resume lo siguiente". Pero en la mecánica subyacente del modelo, esta secuencia textual se transforma en una representación numérica, en forma de vectores, conocidos como "task embeddings" (o incrustaciones de tareas).

Estas "task embeddings" son fundamentales para el funcionamiento del modelo, ya que representan la instrucción inicial en un formato que el sistema puede procesar y entender. Los vectores resultantes tienen la capacidad de **orientar la operación del modelo**, permitiéndole **ajustar su enfoque** en función del tipo de tarea que se le ha asignado, ya sea resumir un texto, traducir una frase, generar un poema, y así sucesivamente.

Además, es importante resaltar que estos vectores no sólo contienen información sobre la secuencia de palabras, sino también sobre las **relaciones estadísticas entre ellas**s. Los modelos de lenguaje como GPT-3 son capaces de entender estas relaciones y utilizarlas para generar respuestas. Por ejemplo, si las palabras "perro" y "ladrido" aparecen frecuentemente juntas en los datos de entrenamiento, el modelo aprenderá a asociarlas y utilizará esta información para generar respuestas relevantes.

Estas relaciones estadísticas entre palabras contienen mucha **información semántica**, lo que significa que pueden ayudar al modelo a entender el significado de las palabras en un contexto particular. Esta capacidad de capturar y procesar información semántica es una de las razones por las que los modelos de lenguaje de gran escala pueden generar respuestas tan relevantes y coherentes a partir de los prompts.

Veamos como diferentes tecnicas de prompt pueden cambiar la salida que obtenemos:

Estamos experimentando con un modelo pre-entrenado **Flan-T5** utilizando un conjunto de datos que incluye diálogos entre dos personas y sus respectivos resúmenes. A través de la variación de prompts o indicaciones al modelo, buscamos optimizar su rendimiento y calidad de las respuestas.

Empezemos nuestro ejercicio, siendo el prompt unicamente el dialogo en si:

## SIN PROMPT ENGINEERING

```plaintext
INPUT PROMPT:
#Person1#: Have you considered upgrading your system?
#Person2#: Yes, but I'm not sure what exactly I would need.
#Person1#: You could consider adding a painting program to your software. It would allow you to make up your own flyers and banners for advertising.
#Person2#: That would be a definite bonus.
#Person1#: You might also want to upgrade your hardware because it is pretty outdated now.
#Person2#: How can we do that?
#Person1#: You'd probably need a faster processor, to begin with. And you also need a more powerful hard disc, more memory and a faster modem. Do you have a CD-ROM drive?
#Person2#: No.
#Person1#: Then you might want to add a CD-ROM drive too, because most new software programs are coming out on Cds.
#Person2#: That sounds great. Thanks.
---------------------------------------------------------------------------------------------------
BASELINE HUMAN SUMMARY:
#Person1# teaches #Person2# how to upgrade software and hardware in #Person2#'s system.
---------------------------------------------------------------------------------------------------
MODEL GENERATION - WITHOUT PROMPT ENGINEERING:
#Person1#: I'm thinking of upgrading my computer.
```

Como podemos apreciar el modelo nos da una respuesta que esta muy lejos de parecerse a una respuesta humana, agreguemos una tecnica de Prompt Engineering para ver como esto cambia.

## ONE SHOT INFERENCE

Esta vez usaremos la tecnica **One Shot Inference** `(Una de las varias que existen)` en la cual en primer lugar en nuestro prompt estara un ejemplo para el modelo, un dialogo y su respectivo resumen, para luego dar el dialogo que queremos resumir, veremos como esto mejora la salida del modelo.

```plaintext
INPUT PROMPT:

Dialogue

#Person1#: What time is it, Tom?
#Person2#: Just a minute. It's ten to nine by my watch.
#Person1#: Is it? I had no idea it was so late. I must be off now.
#Person2#: What's the hurry?
#Person1#: I must catch the nine-thirty train.
#Person2#: You've plenty of time yet. The railway station is very close. It won't take more than twenty minutes to get there.

  What was going on?
  #Person1# is in a hurry to catch a train. Tom tells #Person1# there is plenty of time.


  Dialogue:

#Person1#: Have you considered upgrading your system?
#Person2#: Yes, but I'm not sure what exactly I would need.
#Person1#: You could consider adding a painting program to your software. It would allow you to make up your own flyers and banners for advertising.
#Person2#: That would be a definite bonus.
#Person1#: You might also want to upgrade your hardware because it is pretty outdated now.
#Person2#: How can we do that?
#Person1#: You'd probably need a faster processor, to begin with. And you also need a more powerful hard disc, more memory and a faster modem. Do you have a CD-ROM drive?
#Person2#: No.
#Person1#: Then you might want to add a CD-ROM drive too, because most new software programs are coming out on Cds.
#Person2#: That sounds great. Thanks.

  What was going on?

---------------------------------------------------------------------------------------------------
BASELINE HUMAN SUMMARY:
#Person1# teaches #Person2# how to upgrade software and hardware in #Person2#'s system.

---------------------------------------------------------------------------------------------------
MODEL GENERATION - ONE SHOT:
#Person1 wants to upgrade his system. #Person2 wants to add a painting program to his software. #Person1 wants to add a CD-ROM drive.
```

Como podemos ver al usar esta tecnica de prompt engineering ha generado una mejora significativa en la calidad de la salida que nos devuelve este modelo haciendo que su respuesta se parezca mas a una respuesta humana, adjunto te dejo el link de un notebook elaborado en Google Colab donde podras ver la implementación de este ejercicio:

[GoogleColab](https://colab.research.google.com/drive/1zjRyUZ7umbeB1ersZUOujKsTSgLy6I8D?usp=sharing)

Como pudiste ver la técnica de 'prompt engineering' desempeña un papel crucial en la optimización de los modelos de lenguaje. Al seleccionar y ajustar cuidadosamente las indicaciones que se proporcionan al modelo, es posible mejorar notablemente la precisión y relevancia de las respuestas generadas. Este enfoque destaca la importancia de entender y aplicar eficazmente el 'prompt engineering' para extraer el máximo potencial de los modelos de procesamiento del lenguaje natural.
